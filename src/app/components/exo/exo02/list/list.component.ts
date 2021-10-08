import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() List_Enfant: string[] = [];

  @Output() eventDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  // ondelete via l'eventDelete
  eventDeleteItem(idx: number) {
    this.eventDelete.emit(idx);
  }

  // on delete par l'enfant
  deleteItem(idx: number) {
    this.List_Enfant.splice(idx, 1);
  }
}
