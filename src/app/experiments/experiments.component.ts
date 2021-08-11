import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  nameBeingEdited: string = '';
  experiments: string[] = [
    "Mars soil sample", "Plant growth in habitat", "Human bone density"
  ];

  constructor() { }

  ngOnInit() {
  }

  add(name: string, isFfirst: boolean) {
    if (!this.experiments.includes(name) && name !== '') {
      this.experiments.push(name);
    }
  }

  remove(name: string) {
    let index = this.experiments.indexOf(name);
    this.experiments.splice(index, 1);
  }

  edit(name: string) {
    this.nameBeingEdited = name;
  }

  save(updated: string, name: string) {
    let index = this.experiments.indexOf(name);
    this.experiments.splice(index, 1, updated);
    this.nameBeingEdited = '';
  }
}
