import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-vin-list',
  templateUrl: './modal-vin-list.page.html',
  styleUrls: ['./modal-vin-list.page.scss'],
})
export class ModalVinListPage implements OnInit {

  constructor(private ModalCrtl:ModalController) { }

  ngOnInit() {
  }
  
  getTask(event: Event){
    //this.VinTaskService.getTask(this.vinCode)
    //   .subscribe(all => {
    //  alert(JSON.stringify(all))
    //});
    //event.preventDefault
    //alert(this.vinCtrl.value)
 }

  exitOnData(){
    this.ModalCrtl.dismiss()
  }

}
