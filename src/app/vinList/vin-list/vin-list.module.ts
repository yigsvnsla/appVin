import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { VinListPageRoutingModule } from './vin-list-routing.module';
import { VinListPage } from './vin-list.page';

import { ModalManualVinPageModule } from '../modal-manual-vin/modal-manual-vin.module';
import { ModalFormPageModule} from '../modal-form/modal-form.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinListPageRoutingModule,
    ReactiveFormsModule,
    ModalFormPageModule
  ],
  declarations: [VinListPage]
})
export class VinListPageModule {}
