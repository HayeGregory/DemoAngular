import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.scss'],
})
export class Demo05Component implements OnInit {
  maVar1: string | undefined;
  maVar2: number | undefined;
  maVar3: Date | undefined;
  maVar4: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.maVar1 = 'Salut tout le monde';
    this.maVar2 = 10.072;
    this.maVar3 = new Date();
    this.maVar4 = 25; // pour le custom pipe
  }
}
