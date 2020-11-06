import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController} from '@ionic/angular';
import { ModalGalleryPage } from 'src/app/gallery/modal-gallery/modal-gallery.page';

@Component({
  selector: 'app-vin-list',
  templateUrl: './vin-list.page.html',
  styleUrls: ['./vin-list.page.scss'],
})
export class VinListPage implements OnInit {

  constructor(private ModalController:ModalController,private AlertController:AlertController) { }

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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  };

  async openModal(){
    const modal = await this.ModalController.create({
      component: ModalGalleryPage
    });
    
    
    
    await modal.present();
    const items = await modal.onDidDismiss()
  }

}
