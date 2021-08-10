import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited:object = null;

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  add(name: string, isFfirst: boolean) {
    this.crew.push({ name: name, firstMission: isFfirst });
  }

  remove(member: object) {
    if (this.crew.includes(member)) {
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    }
  }

  edit(member: object){
    this.memberBeingEdited = member;
  }

  save(name: string, member: object){    
    member['name']=name;
    this.memberBeingEdited = null;
  }

}
