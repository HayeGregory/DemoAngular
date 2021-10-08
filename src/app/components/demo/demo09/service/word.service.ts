import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class WordService {
  public words: string[] = [];

  constructor(private logService: LogService) {}

  public removeOne(idx: number) {
    this.logService.log('le mot :' + this.words[idx] + 'est supprimé');
    this.words.splice(idx, 1);
  }
}
