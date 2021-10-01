import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss'],
})
export class Demo04Component implements OnInit {
  maVariable: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.maVariable = 0;
  }

  changeValue() {
    this.maVariable += 1;
  }
}
