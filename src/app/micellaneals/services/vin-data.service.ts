import { VinData } from './../interface/vin-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinDataService {
  VinDatas : VinData[];

  constructor() { 
    this.VinDatas = [
      {
        id:136,
        nameComponent:"Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.",
        zoneComponent:"VIN:5NPDH4AE0BH001957"
      },{
        id:223,
        nameComponent:"Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.",
        zoneComponent:"VIN:1FAFP90S45Y400752",
      }
    ]
  }

  getVinData(){
    return this.VinDatas
  }

  getArrayPosition(){
    
  }

  addVinData(VinData : VinData){
    this.VinDatas.push(VinData);
  }
}
