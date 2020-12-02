import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ModalFormPageRoutingModule } from './modal-form-routing.module';
import { ModalFormPage } from './modal-form.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormPageRoutingModule
  ],
  declarations: [ModalFormPage]
})
export class ModalFormPageModule {}
