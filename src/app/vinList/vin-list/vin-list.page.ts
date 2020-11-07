import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController,IonRouterOutlet} from '@ionic/angular';
import { ModalVinListPage } from "../modal-vin-list/modal-vin-list.page";
import { ModalManualVinPage } from '../modal-manual-vin/modal-manual-vin.page'

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
      message: 'Choose the option how you want to register the VIN code',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.openModal(ModalManualVinPage)
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.openModal(ModalVinListPage)
            console.log('Confirm Okay');
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
