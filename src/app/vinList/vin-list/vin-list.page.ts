import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController,IonRouterOutlet} from '@ionic/angular';
import { ModalVinListPage } from "../modal-vin-list/modal-vin-list.page";

import { ModalFormPage } from "../modal-form/modal-form.page";
@Component({
  selector: 'app-vin-list',
  templateUrl: './vin-list.page.html',
  styleUrls: ['./vin-list.page.scss'],
})
export class VinListPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet,public ModalController:ModalController,private AlertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Vin',
      subHeader: '',
      message: 'Choose the option how you want to register the Component',
      buttons: [
        {
          text: 'VIN-SCAN',
          handler: () => {
            this.openModal(ModalVinListPage)
            console.log('Confirm Okay');
          }
        }, {
          text: 'MANUAL',
          handler: () => {
            this.openModal(ModalFormPage)
            console.log('Confirm Okay');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler:() => {
            
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  };

  async openModal( modalClass ){
   const modal = await this.ModalController.create({
      component: modalClass,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    await modal.present();
    const items = await modal.onDidDismiss()
  }

}
