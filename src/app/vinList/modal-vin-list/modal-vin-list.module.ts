import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVinListPageRoutingModule } from './modal-vin-list-routing.module';

import { ModalVinListPage } from './modal-vin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVinListPageRoutingModule,
    ModalVinListPageModule,
    ReactiveFormsModule
  ],
  declarations: [ModalVinListPage]
})
export class ModalVinListPageModule {}
