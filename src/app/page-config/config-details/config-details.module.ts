import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigDetailsPageRoutingModule } from './config-details-routing.module';

import { ConfigDetailsPage } from './config-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigDetailsPageRoutingModule
  ],
  declarations: [ConfigDetailsPage]
})
export class ConfigDetailsPageModule {}
