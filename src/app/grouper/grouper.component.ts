import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "grouper",
  templateUrl: "./grouper.component.html",
  styleUrls: ["./grouper.component.css"]
})
export class GrouperComponent implements OnInit {
  counts = [];
  countsArray = [];
  color = '';
  total = 0;
  num = 0;
  input = 0;
  @Input() data: any[];
  ngOnInit() {
    this.data = [
      'red',
      'red',
      'red',
      'yellow',
      'yellow',
      'blue',
      'blue',
      'yellow',
      'yellow',
      'blue',
      'blue',
      'blue',
      'blue'
    ];
    this.getTotal();
  }
  getTotal() {
    const counts = {};
    this.data.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    this.counts = Object.keys(counts).map((key) => [key, counts[key]]);
  }
  GetData(event) {
    this.getTotal();
    this.total = 0;
    let value = Number(event.target.value);
    if (value >= 1) {
      this.input = value;
      for (let item of this.counts) {
        if (Number(item[1]) / value >= 1) {
          item[1] = Math.floor(Number(item[1]) / value);
          this.total += item[1];
        } else {
          item[1] = 0;
        }
      }
    }
  }

}