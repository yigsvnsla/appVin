import { Injectable } from '@angular/core';
import { ListComponentsConfigInterface } from '../../interface/configService/list-components-config-interface'
import { PageListConfig } from '../../interface/configService/page-list-config'

@Injectable({
  providedIn: 'root'
})
export class ListComponentsConfigService {

  models : {}
  config : ListComponentsConfigInterface[]
  pageList : PageListConfig[]

  constructor() { 
    this.pageList = [
      {
        title:"Lists",
        desc:{
          title : 'dsadsa',
          description : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          icon : 'add'
        }
      }
    ]

    this.config = [
      {
          id:100,
          name:"Exterior Part",
          components:[
              "Back Glass",
              "Door Mirrors",
              "Fender",
              "FrontBumper",
              "FrontDoor",
              "FrontDoorGlass",
              "FrontDoorHandle",
              "Grille",
              "Headlights",
              "Hood",
              "InnerTaillights",
              "OuterTaillights",
              "ParkLamps",
              "QuarterPanel",
              "RearBumper",
              "BackGlass",
              "DoorMirrors",
              "Fender",
              "FrontBumper",
              "FrontDoor",
              "FrontDoorGlass",
              "FrontDoorHandle",
              "Grille",
              "Headlights"]
        },{
          id:200,
          name:"Interior Part",
          components:[
              "Audiovisual(A/V) Heater/AC Control",
              "A/C Evaporator",
              "Air Bag",
              "CD Player",
              "Dash Cover",
              "Heater/AC Control",
              "Instrument Cluster",
              "Passenger Air Bag",
              "Seat Belts Front",
              "Seat, Rear",
              "Steering Column",
              "Steering Wheel",
              "Speedometer/Cluster Instrument",
              "Heater Assy    Mirror, Rear View",
              "Interior Complete Trim Panel, Door (Front)",
              "Trim Panel, Door (Rear/Back)",
              "Seat, Front Seat Track, Front Only",
              "Seat Belt, Front Seat Belt Motor",
              "Seat, Rear (2nd) Seat, Back (3rd)",
              "Windshield"
          ]
        },{
          id:300,
          name:"Under Hood",
          components:[
              "A/C Compressor",
              "Air Cleaner",
              "Alternator",
              "Exhaust Manifold",
              "Intake Manifold",
              "Power Brake Booster",
              "Power Steering Resevior",
              "Radiator",
              "Radiator Overflow Bottle",
              "Valve Cover",
              "Windsheild Washer Bottle"
          ]
        },{
          id:400,
          name:"Underneath",
          components:[
              "Engine Cradle",
              "Front Axle Assy",
              "Header Pipe",
              "Lower Control Arm",
              "Oil Pan",
              "Transmission Pan",
              "Fuel Tank",
              "Rear Cross Member",
              "Rear Suspension Assy",
              "4x4 Front",
              "Axle Shaft",
              "Carrier",
              "Catalytic Convertors",
              "Lower Control Arm",
              "Oil Pan",
              "Rear Drive Shaft",
              "Steering Rack",
              "Sway Bar",
              "Torsion Bar",
              "Transfer Case",
              "Transmission",
              "4x4 Back",
              "Drive Shaft",
              "Fuel Tank",
              "Leaf Spring",
              "Rear Axle",
              "Rear Carrier",
              "Transfer Case"
  
          ]
        },{
          id:500,
          name:"Wheel",
          components:[
              "Caliper",
              "Hub",
              "Hub Cap",
              "Lower Control Arm",
              "Rotor",
              "Strut",
              "Spindle",
              "Tire",
              "Wheel"
          ]
        },{
          id:600,
          name:"Body Parts",
          components:[
              "Front End Assembly (Nose)",
              "Front Bumper Assembly",
              "Grille",
              "Radiator",
              "Condenser",
              "Cooling Fan (Rad & Con mtd)",
              "Radiator Core Support",
              "Hood",
              "Headlight Assembly",
              "Fog/Park/Marker Light",
              "Fender",
              "Wheel",
              "Wheel Cover/Hubcap",
              "Windshield",
              "Dash Panel",
              "Air Bag",
              "Front Door",
              "Front Door Mirror",
              "Rear Door",
              "Roof",
              "Rear Clip",
              "Tail Light",
              "Rear Finish Panel",
              "Rear Bumper",
              "Trunk Lid/Hatch",
              "Quarter Panel",
              "Back Glass",
              "Bed, Pickup"
          ]
        },{
            id:700,
            name:"Mechanical Parts",
            components:[
              "Engine",
              "Cylinder Head (Engine)",
              "Engine Block",
              "Engine Computer",
              "A/C Compressor",
              "Turbocharger / Supercharger",
              "Alternator",
              "Power Steering Pump",
              "Exhaust Manifold",
              "Distributor",
              "Transmission",
              "Transfer Case",
              "Front Drive Shaft",
              "Rear Drive Shaft",
              "Wiring Harness/Misc. Electric",
              "Computer Box Not Engine",
              "Front Axle Shaft",
              "Axle Assy Fr(4WD w. Housing)",
              "Knee / Strut Assy",
              "Strut (see also Knee Assy)",
              "Spindle",
              "Control Arm, Front Lower",
              "Steering Rack/Box/Gear",
              "Engine Cradle",
              "Rear Axle Assy (RWD)"
            ]
        }   
    ];

    this.models = [
          "Acura",	
          "Alfa Romeo",	
          "American Motors",	
          "Aston Martin",
          "Audi",
          "BMW",	
          "Bentley",	
          "Bugatti",	
          "Buick",	
          "Cadillac",	
          "Chevrolet",	
          "Chrysler",	
          "Daewoo",	
          "Daihatsu",	
          "Datsun",	
          "DeLorean",	
          "Dodge",	
          "Eagle",	
          "Ferrari",	
          "FIAT",	
          "Fisker",	
          "Ford",	
          "Freightliner",	
          "GMC",	
          "Genesis",	
          "Geo",	
          "Honda",	
          "HUMMER",	
          "Hyundai",	
          "Infiniti",	
          "Isuzu",	
          "Jaguar",	
          "Jeep",	
          "Karma",	
          "Kia",	
          "Lamborghini",	
          "Lancia",	
          "Land Rover",	
          "Lexus",	
          "Lincoln",	
          "Lotus",	
          "MG",	
          "Maserati",	
          "Maybach",	
          "Mazda",	
          "McLaren",	
          "Mercedes-Benz",	
          "Mercedes-Maybach",	
          "Mercury",	
          "Merkur",	
          "MINI",	
          "Mitsubishi",	
          "Mobility Ventures",	
          "Mosler",	
          "Nissan",	
          "Noble",	
          "Oldsmobile",	
          "Opel",	
          "Pagani",	
          "Panoz",	
          "Peugeot",	
          "Pininfarina",	
          "Plymouth",	
          "Polaris",	
          "Pontiac",	
          "Porsche",	
          "Renault",	
          "RAM",	
          "Rolls-Royce",	
          "Roush",	
          "Saab",	
          "Saleen",	
          "Saturn",	
          "Scion",	
          "Shelby",	
          "Shelby Super Car",	
          "smart",	
          "Spyker",	
          "SRT",	
          "Sterling",	
          "Studebaker",	
          "Subaru",	
          "Suzuki",	
          "Tesla",	
          "Toyota",	
          "Trailer",	
          "Triumph",	
          "VPG",	
          "Volkswage",
          "Volvo"
      ];
  
  }

  getConfigList(){
    return this.config
  }

  getConfigComponent(id : number){
    return this.config[id].components
  }

  getConfigLisModels(){
    return this.models
  }


  getPageListConfig(){
    return this.pageList
  }

}
