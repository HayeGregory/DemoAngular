import { Component, OnInit } from '@angular/core';
import { WordService } from '../service/word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent implements OnInit {
  word: string = '';

  // injection du service
  constructor(private wordService: WordService) {}

  ngOnInit(): void {}

  addWord() {
    this.wordService.words.push(this.word);
    console.log(this.word + 'a ete ajoute !!!!');
    console.log(this.wordService.words);
  }
}
