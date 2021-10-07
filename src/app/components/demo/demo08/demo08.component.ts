import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss'],
})
export class Demo08Component implements OnInit {
  maVar: string = "En attente de l'enfant ...";

  constructor() {}

  ngOnInit(): void {}

  ReactToChildren(s: string) {
    this.maVar = s;
  }
}
