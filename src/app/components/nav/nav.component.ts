import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  listeLink: Link[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listeLink = [
      { url: '/home', title: 'Home' },
      {
        title: 'Démos',
        children: [
          { url: '/demo/demo01', title: 'D01 - One-Way Binding' },
          { url: '/demo/demo02', title: 'D02 - Two-Way Binding' },
          { url: '/demo/demo03', title: 'D03 - Event Binding' },
          { url: '/demo/demo04', title: 'D04 - Attribute Binding' },
          { url: '/demo/demo05', title: 'D05 - Pipes' },
          { url: '/demo/demo06', title: 'D06 - Component Directives' },
          { url: '/demo/demo07', title: 'D07 - Directives Structurelles' },
          { url: '/demo/demo07bis', title: 'D07bis - Directives Custom' },
          { url: '/demo/demo08', title: 'D08 - Input / output' },
          { url: '/demo/demo09', title: 'D09 - Service' },
          { url: '/demo/demo10', title: 'D10 - Formulaire' },
        ],
      },
      {
        title: 'Exercices',
        children: [
          { url: '/exo/exo01', title: 'Exo 1 - Chrono' },
          { url: '/exo/exo02', title: 'Exo 2 - Shopping-list' },
        ],
      },
      { url: '/about', title: 'About' },
    ];
  }

  toggleVisible(idx: number) {
    this.listeLink[idx].isVisible = !this.listeLink[idx].isVisible;
  }
}
