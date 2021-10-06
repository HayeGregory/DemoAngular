import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss'],
})
export class Demo07Component implements OnInit {
  maVariable: string = '';

  isToggled: boolean = false;

  personnes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      'Erik',
      'Sefa',
      'Loup',
      'Bojana',
      'David',
      'Greg',
      'etc....',
    ];
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
