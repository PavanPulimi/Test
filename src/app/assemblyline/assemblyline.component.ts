import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblylineComponent implements OnInit {
  @Input() stages: string[];
  constructor() { }
  idea= [
    "indigo",
    "turquoise",
    "magenta",
    "fuschia"
  ];
  development= [];
  testing= [];
  deployment = [];
  listItem:string;
   ngOnInit(): void {
    console.log('onInit');
  }

  addItem(): void {
    if(this.listItem){
    this.idea.push(this.listItem);
    this.listItem = '';
    }
  }

  move(item): void {
    if (this.idea.indexOf(item) !== -1) {
      this.idea.splice(this.idea.indexOf(item), 1);
      this.development.push(item);
    }else if (this.development.indexOf(item) !== -1) {
      this.development.splice(this.development.indexOf(item), 1);
      this.testing.push(item);
    }else if (this.testing.indexOf(item) !== -1) {
      this.testing.splice(this.testing.indexOf(item), 1);
      this.deployment.push(item);
    }
    else if (this.deployment.indexOf(item) !== -1) {
      this.deployment.splice(this.deployment.indexOf(item), 1);
    } else {
      this.deployment.splice(this.deployment.indexOf(item), 1);
    }
  }

  onRightClick(item): void{
    if (this.idea.indexOf(item) !== -1) {
      this.idea.splice(this.idea.indexOf(item), 1);
    }else if (this.development.indexOf(item) !== -1) {
      this.development.splice(this.development.indexOf(item), 1);
      this.idea.push(item);
    }else if (this.testing.indexOf(item) !== -1) {
      this.testing.splice(this.testing.indexOf(item), 1);
      this.development.push(item);
    }
    else if (this.deployment.indexOf(item) !== -1) {
      this.deployment.splice(this.deployment.indexOf(item), 1);
      this.testing.push(item);
    } else {
      this.deployment.splice(this.deployment.indexOf(item), 1);
    }
  }

}
