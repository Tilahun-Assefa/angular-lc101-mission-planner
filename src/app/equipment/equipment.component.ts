import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;  
  

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:
  addItem(item: object) {
    const result = this.cargoHold.filter(elem => elem === item);
    if (this.cargoMass  < this.maximumAllowedMass && this.cargoHold.length < this.maxItems && result.length <2) {
      this.cargoHold.push(item);
      this.cargoMass += item["mass"];      
    }
    return this.cargoMass < 2200 && this.cargoMass > 1800;
  }

  clearCargoHold(){
    this.cargoHold = [];
    this.cargoMass = 0;
    return false;
  }

  //function to remove equipment from the cargoHold
  removeItem(item: object){
    let index =  this.cargoHold.indexOf(item);
    this.cargoHold.splice(index,1);
    this.cargoMass -= item["mass"];
    return this.cargoMass < 2200 && this.cargoMass > 1800;
  }
}
