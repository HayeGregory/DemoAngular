import { Component, OnInit } from '@angular/core';
import { WordService } from './demo09/service/word.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [WordService],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
