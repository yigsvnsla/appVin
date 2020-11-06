import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinTaskService {

  constructor(private HttpClient:HttpClient) { }

  
  private ulrData = {
    url:'https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/',
    vin:'19XFB2E52CEO024882',
    modelYear:'2012',
    format:'json',
    path:`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/5UXWX7C5*BA?format=json&modelyear=2020`
  }

  
  //private api = `${this.ulrData.url}${this.ulrData.vin}?format=${this.ulrData.format}&modelyear=${this.ulrData.modelYear}`;

  getTask(vin:string){
    const path =`${this.ulrData.url}${this.ulrData.vin}?format=${this.ulrData.format}&modelyear=${this.ulrData.modelYear}`;
    return this.HttpClient.get<VinTaskService>(path);
  }

}
