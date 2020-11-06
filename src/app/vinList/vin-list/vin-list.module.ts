import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinListPageRoutingModule } from './vin-list-routing.module';

import { VinListPage } from './vin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinListPageRoutingModule
  ],
  declarations: [VinListPage]
})
export class VinListPageModule {}
