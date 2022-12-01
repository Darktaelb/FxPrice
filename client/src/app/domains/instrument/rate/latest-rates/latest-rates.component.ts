import { Component, OnDestroy, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { first } from 'rxjs';
import { InstrumentRateUpdateEvent } from '../models/instrument-rate-update.event';
import { InstrumentRateModel } from '../models/rate.model';
import { InstrumentRateService } from '../rate.service';

@Component({
  selector: 'latest-rates',
  templateUrl: './latest-rates.component.html',
  styleUrls: ['./latest-rates.component.scss'],
})
export class LatestRatesComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['instrument', 'bid', 'ask', 'timestamp'];
  public instrumentRates: InstrumentRateModel[] = [];

  constructor(
    private readonly instrumentRateService: InstrumentRateService,
    private readonly socket: Socket
  ) {}
  async ngOnInit() {
    this.socket.connect();

    this.instrumentRateService
      .getLatests()
      .pipe(first())
      .subscribe({
        next: (nextValue) => (this.instrumentRates = nextValue),
        error: (error) => console.log(error),
      });

    this.socket.on('rateUpdate', (event: InstrumentRateUpdateEvent) =>
      this.onInstrumentRateUpdate(event)
    );
  }

  ngOnDestroy(): void {
    this.socket.disconnect();
  }

  private onInstrumentRateUpdate(event: InstrumentRateUpdateEvent): void {
    const existingInstrumentRate = this.instrumentRates.filter(
      (instrumentRate) => instrumentRate.instrument === event.key
    )[0];

    if (existingInstrumentRate) {
      existingInstrumentRate.id = event.updatedValue.id;
      existingInstrumentRate.bid = event.updatedValue.bid;
      existingInstrumentRate.ask = event.updatedValue.ask;
      existingInstrumentRate.timestamp = event.updatedValue.timestamp;
    } else {
      this.instrumentRates.push(event.updatedValue);
    }
  }
}
