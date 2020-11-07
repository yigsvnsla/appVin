import { Component, OnInit } from '@angular/core';
import { ModalController,Platform } from '@ionic/angular';
import { FormBuilder,Validators } from "@angular/forms";



@Component({
  selector: 'app-modal-manual-vin',
  templateUrl: './modal-manual-vin.page.html',
  styleUrls: ['./modal-manual-vin.page.scss'],
})

export class ModalManualVinPage implements OnInit {
  selectedVal: number;
  data:any[]=[];
  dateValue: Date = new Date();

  constructor(private ModalCtrl:ModalController, private formBuilder:FormBuilder,private Platform:Platform) {
    this.data=[
      {id:101,name:'ford'},{id:102,name:'chery'},{id:103,name:'land Rover'}
    ];

    
  };
  
  ngOnInit() {

  }
  

onClick(){
  console.log(this.selectedVal);
  
}

  onchange(event){
    console.log("you have selected id="+ event.targe.value );
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

  getSelectedVal(){
    return this.getSelectedVal;
  }
  getDateValue(){
    return this.dateValue;
  }

  RegistrationForm = this.formBuilder.group({
    model:[this.getSelectedVal(),[Validators.required,Validators.minLength(1),Validators.maxLength(100)]],
    dateCar:[this.getDateValue(),[Validators.required]],
    email:['',[Validators.required]],
    phone:[''],
    address:this.formBuilder.group({
      street:['',[Validators.required]],
      city:[''],
      state:['']
    })
  });


  public submit(){
    console.log(this.RegistrationForm.value);
    
  }

  exitOnData(){
    this.ModalCtrl.dismiss()
  }
}
