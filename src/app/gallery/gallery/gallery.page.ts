import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ModalGalleryPage } from "../modal-gallery/modal-gallery.page"
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }

  async openModalData(){
    const modal = await this.ModalController.create({
      component:ModalGalleryPage
    });
    await modal.present();

    const items = await modal.onDidDismiss()
  };
}
