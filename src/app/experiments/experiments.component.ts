import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  executedExperiments: string[] = [];
  constructor() { }

  ngOnInit() { }

  addExperiment(experiment: string) {
    if (this.executedExperiments.includes(experiment)) {
      let index = this.executedExperiments.indexOf(experiment);
      this.executedExperiments.splice(index, 1);
    } else {
      if (this.executedExperiments.length < 3) {
        this.executedExperiments.push(experiment);
      }
    }
  }
  removeItem(item: string){
    let index =  this.executedExperiments.indexOf(item);
    this.executedExperiments.splice(index,1);    
  }

}
