import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-modal-vin-list',
  templateUrl: './modal-vin-list.page.html',
  styleUrls: ['./modal-vin-list.page.scss'],
})
export class ModalVinListPage implements OnInit {

  code : {}

  constructor(private ModalCrtl: ModalController, private barcode: BarcodeScanner) {
  }


  ngOnInit() {
  }

  getTask(event: Event) {
    //this.VinTaskService.getTask(this.vinCode)
    //   .subscribe(all => {
    //  alert(JSON.stringify(all))
    //});
    //event.preventDefault
    //alert(this.vinCtrl.value)
  }

  exitOnData() {
    this.ModalCrtl.dismiss()
  }
  Scanner() {
    this.barcode.scan().then(datos =>{
      this.code = datos;
      console.log(datos);
    }).catch(err =>{
      console.log(err);
    });
  }

}
