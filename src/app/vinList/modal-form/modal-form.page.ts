import { Component, OnInit } from '@angular/core';
import { ModalController,Platform } from '@ionic/angular';
import { FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {
  selectMarcVal: number;
  data:any[]=[];
  dateValue: Date = new Date();
  
  private dateTemp = this.dateValue.getFullYear();
  
  RegistrationForm = this.formBuilder.group({
    model:[this.getSelectMarcVal(),[Validators.required]],
    dateCar:[this.getDateValue(),[Validators.required]],
    address:this.formBuilder.group({
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
  
  get street(){
    return this.RegistrationForm.get('address.street')
  }
  get city(){
    return this.RegistrationForm.get('address.city')
  }
  get state(){
    return this.RegistrationForm.get('address.state')
  }

  constructor(
    private ModalCtrl:ModalController, 
    private formBuilder:FormBuilder,
    private Platform:Platform){ // en esta seccion se implementa los services que cargaran la inforamcion a la lista
      this.data=[
        {id:101,name:'ford'},{id:102,name:'chery'},{id:103,name:'land Rover'}
      ];

    }

  ngOnInit() {
    console.log(this.dateTemp);
    
  }

  submit(){
    console.log(this.RegistrationForm.value);
  }

  exitOnData(){
    this.ModalCtrl.dismiss()
  }

  private getSelectMarcVal(){
    return this.selectMarcVal
  }

  private getDateValue(){
    return this.dateTemp
  }
}
