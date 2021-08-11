import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  nameBeingEdited: string = '';
  equipments: string[] = [
    "Habitat dome", "Drones", "Food containers", "Oxygen tanks"
  ];

  constructor() { }

  ngOnInit() {
  }
  add(name: string, isFfirst: boolean) {
    if (!this.equipments.includes(name) && name !== '') {
      this.equipments.push(name);
    }
  }

  remove(name: string) {
    let index = this.equipments.indexOf(name);
    this.equipments.splice(index, 1);
  }

  edit(name: string) {
    this.nameBeingEdited = name;
  }

  save(updated: string, name: string) {
    let index = this.equipments.indexOf(name);
    this.equipments.splice(index, 1, updated);
    this.nameBeingEdited = '';
  }

}
