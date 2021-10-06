import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss'],
})
export class Exo01Component implements OnInit {
  chronoSecondes: number = 0;
  timer: any;

  constructor() {}

  ngOnInit(): void {}

  StartChrono() {
    // stocker le set interval pour pouvoir binding le disable du bouton
    this.timer = setInterval(() => {
      this.chronoSecondes++;
    }, 100);
  }
  StopChrono() {
    clearInterval(this.timer);
    this.timer = null;
  }
  ResetChrono() {
    this.chronoSecondes = 0;
    this.StopChrono();
  }
}
