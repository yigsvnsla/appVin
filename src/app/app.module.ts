import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule ,FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NoArrowDirective } from './micellaneals/no-arrow.directive';

import { VinDataService } from "./micellaneals/services/vin-data.service";
import { ListComponentsConfigService } from './micellaneals/services/configService/list-components-config.service'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@NgModule({
  declarations: [
    AppComponent,
    NoArrowDirective,
    ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [
    ListComponentsConfigService,
    VinDataService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
