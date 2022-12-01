import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate.component';
import { LatestRatesComponent } from './latest-rates/latest-rates.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { InstrumentRateService } from './rate.service';
import { MatTableModule } from '@angular/material/table';

const socketIOConfig: SocketIoConfig = {
  url: environment.socketIOUrls['rate'],
  options: {},
};

@NgModule({
  imports: [
    CommonModule,
    RateRoutingModule,
    MatTableModule,
    SocketIoModule.forRoot(socketIOConfig),
  ],
  declarations: [RateComponent, LatestRatesComponent],
  providers: [HttpClient, ApiService, InstrumentRateService],
  bootstrap: [RateComponent],
})
export class RateModule {}
