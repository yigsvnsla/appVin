import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { FormBuilder,Validators } from "@angular/forms";

import { VinDataService } from "../../micellaneals/services/vin-data.service";
import { VinData } from '../../micellaneals/interface/vin-data'

import { ListComponentsConfigService } from "../../micellaneals/services/configService/list-components-config.service";
import { ListComponentsConfigInterface } from "../../micellaneals/interface/configService/list-components-config-interface";
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {
 

  dateValue: Date = new Date();
  
  slides:any[]=[]

  
  onSlide = false
  private dateTemp = this.dateValue.getFullYear();


  RegistrationForm = this.formBuilder.group({
    model:[this.getSelectMarcVal(),[Validators.required]],
    dateCar:[this.getDateValue(),[Validators.required]],
    autoParts:this.formBuilder.group({
      street:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]]
    })
  });

  public errorMessages={
    model:[
      {type:'required',message:'Name is requerided'},
      {type:'maxLength',message:'Name cant be longer than 100 characters'}
    ],
    email:[
      {type:'required',message:'Email is requerided'},
      {type:'pattern',message:'Plase enter a valid email address'}
    ],
    phone:[
      {type:'required',message:'phone is requerided'},
      {type:'pattern',message:'Plase enter a valid email phone number'}
    ],
    street:[
      {type:'required',message:'street is requerided'},
      {
        type: 'maxlength',
        message:'Street name cant be longer than 100 characters'
      }
    ],
    city:[
      {type:'required',message:'city is requerided'},
      {
        type: 'maxlength',
        message:'City name cant be longer than 100 characters'
      }
    ],
    state:[
      {type:'required',message:'state is requerided'},
      {
        type: 'maxlength',
        message:'State name cant be longer than 100 characters'
      }
    ]
  }
  
  /*get street(){
    return this.RegistrationForm.get('address.street')
  }
  get city(){
    return this.RegistrationForm.get('address.city')
  }
  get state(){
    return this.RegistrationForm.get('address.state')
  }
*/
  constructor(
    private ListComponentsConfigService : ListComponentsConfigService,
    private VinDataService:VinDataService,
    private ModalCtrl:ModalController, 
    private formBuilder:FormBuilder,
    private alertCtrl: AlertController)
      {};
    
    vinDatas : VinData[];
    listConfig : ListComponentsConfigInterface[];
    listConfigComponents: []
    listModels : {}
    selectMarcVal
    

    ngOnInit() {
      // en esta seccion se implementa los services que cargaran la inforamcion a la lista al iniciar el componente
      this.vinDatas = this.VinDataService.getVinData();
      this.listConfig = this.ListComponentsConfigService.getConfigList();
      this.listModels = this.ListComponentsConfigService.getConfigLisModels();
      console.log(this.listModels[0]);
      
    }
    
    camShot(){
      alert(this.valueSelectAutoParts)
    }
    valueSelectAutoParts: String;
      valueSelectArea: String;
    onChangeSelectArea(event){
      this.valueSelectArea = event.target.value;
      //this.listConfigComponents = this.ListComponentsConfigService.getConfigComponent()
      
    }

      
    onChangeSelectAutoParts(event){
      this.valueSelectAutoParts = event.target.value;
      console.log(this.valueSelectAutoParts)
    }

    
 
    addComponent(){
      if (this.onSlide == false ) {
        this.onSlide = true;
      }else{
        this.VinDataService.addVinData({
          id:1,
          nameComponent:this.valueSelectAutoParts,
          zoneComponent:this.valueSelectArea
        })
        console.log(this.VinDataService.getVinData());
      }
       
    }

  submit(){
    if(this.onSlide == true)
    console.log(this.valueSelectAutoParts  + ' - ' + this.valueSelectArea);
    
    //console.log(this.RegistrationForm.value);
  }

  exitOnData(){
    this.ModalCtrl.dismiss()
  }

  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Select name the component',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  private getSelectMarcVal(){
    return this.selectMarcVal
  }

  private getDateValue(){
    return this.dateTemp
  }

}
