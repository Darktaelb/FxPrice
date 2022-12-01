import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestRatesComponent } from './latest-rates/latest-rates.component';

const routes: Routes = [
  {
    path: 'latest',
    component: LatestRatesComponent,
  },
  {
    path: '**',
    redirectTo: 'latest',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateRoutingModule {}
