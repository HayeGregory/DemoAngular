import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss'],
})
export class Demo02Component implements OnInit {
  maVariable: string = '';

  constructor() {}

  ngOnInit(): void {
    this.maVariable = 'Salut les gars !';
  }
}
