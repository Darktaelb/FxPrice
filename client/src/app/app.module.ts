import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './shared/services/storage.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatButtonModule],
  declarations: [AppComponent],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
