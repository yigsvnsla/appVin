import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.page.html',
  styleUrls: ['./modal-gallery.page.scss'],
})
export class ModalGalleryPage implements OnInit {

  constructor(private ModalController:ModalController) { }

  ngOnInit() {
  }

  exitOnData(){
    this.ModalController.dismiss()
  }
}
