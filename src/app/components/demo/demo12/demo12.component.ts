import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss'],
})
export class Demo12Component implements OnInit {
  parameter: number = 42;
  param2: string = 'harman';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectionRelative() {
    this.router.navigate(['about']);
  }
  redirectionAbsolue() {
    this.router.navigateByUrl('/about');
  }
  redirect() {
    this.router.navigate(['demo/recup/' + this.parameter + '/' + this.param2]);
  }
}
