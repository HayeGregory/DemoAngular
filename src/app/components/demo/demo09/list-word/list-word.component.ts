import { Component, OnInit } from '@angular/core';
import { WordService } from '../service/word.service';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.scss'],
})
export class ListWordComponent implements OnInit {
  public words: string[] = [];

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.words = this.wordService.words;
  }

  remove(idx: number) {
    this.wordService.removeOne(idx);
  }
}
