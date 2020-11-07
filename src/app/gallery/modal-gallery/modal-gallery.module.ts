import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalGalleryPageRoutingModule } from './modal-gallery-routing.module';
import { ModalGalleryPage } from './modal-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGalleryPageRoutingModule
  ],
  declarations: [ModalGalleryPage]
})
export class ModalGalleryPageModule {}
