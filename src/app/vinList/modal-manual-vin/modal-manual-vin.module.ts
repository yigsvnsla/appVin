import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalManualVinPageRoutingModule } from './modal-manual-vin-routing.module';
import { ModalManualVinPage } from './modal-manual-vin.page';

import { ModalGalleryPageModule } from 'src/app/gallery/modal-gallery/modal-gallery.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModalManualVinPageRoutingModule,
    ModalGalleryPageModule,
    NgModule
  ],
  declarations: [ModalManualVinPage]
})
export class ModalManualVinPageModule {}
