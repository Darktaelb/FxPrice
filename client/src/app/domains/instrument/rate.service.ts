import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable()
export class InstrumentRateService {
  private readonly service: string = 'instrument';

  constructor(private readonly apiService: ApiService) {}

  public getLatestByInstrument(instrument: string): Observable<any> {
    const encodedInstrument = encodeURIComponent(instrument);
    return this.apiService.requestAnonymously(
      this.service,
      `instrument/${encodedInstrument}/rate/latest`
    );
  }

  public getLatests(): Observable<any> {
    return this.apiService.requestAnonymously(
      this.service,
      'instrument/rate/latest'
    );
  }
}
