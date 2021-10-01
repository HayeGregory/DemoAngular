import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss'],
})
export class Demo03Component implements OnInit {
  maVariable: String = '';

  constructor() {}

  ngOnInit(): void {
    this.maVariable = 'salut tout me monde!';
  }

  maMethode() {
    this.maVariable = 'on change la valeur';
  }
}
