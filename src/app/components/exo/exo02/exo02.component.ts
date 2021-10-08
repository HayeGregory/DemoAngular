import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss'],
})
export class Exo02Component implements OnInit {
  List_parent: string[] = ['AAAAAA', 'BBBBBB', 'CCCCCC'];
  article: string = '';

  constructor() {}

  ngOnInit(): void {}
  reactEventDelete(idx: number) {
    this.List_parent.splice(idx, 1);
  }

  ajouterArticle() {
    this.List_parent.push(this.article);
  }
}
