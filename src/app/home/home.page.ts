import { ModalVinListPage } from './../vinList/modal-vin-list/modal-vin-list.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular' 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ModalCtrl : ModalController ) {}

  
   search() {
    this.openModal(ModalVinListPage)
  }

  async openModal( modalClass ){
    const modal = await this.ModalCtrl.create({
       component: modalClass,
       swipeToClose: true,
       
     });
     await modal.present();
     const items = await modal.onDidDismiss()
   }
}
