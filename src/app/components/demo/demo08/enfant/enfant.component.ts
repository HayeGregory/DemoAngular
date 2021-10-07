import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss'],
})
export class EnfantComponent implements OnInit {
  @Input() title: string = '';

  @Output() monEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  methodeA() {
    this.monEvent.emit('Salut la compagnie...');
  }

  methodeB() {
    this.monEvent.emit('Bien le bonjour...');
  }
}
