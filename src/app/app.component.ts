import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppTasks';
  planning= [];
  development= [];
  testing= [];
  deployment = [];
  listItem:string;
   ngOnInit(): void {
    console.log('onInit');
  }

  addItem(): void {
    if(this.listItem){
    this.planning.push(this.listItem);
    this.listItem = '';
    }
  }

  move(item): void {
    if (this.planning.indexOf(item) !== -1) {
      this.planning.splice(this.planning.indexOf(item), 1);
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
    if (this.planning.indexOf(item) !== -1) {
      this.planning.splice(this.planning.indexOf(item), 1);
    }else if (this.development.indexOf(item) !== -1) {
      this.development.splice(this.development.indexOf(item), 1);
      this.planning.push(item);
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

