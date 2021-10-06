import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss'],
})
export class Demo06Component implements OnInit {
  // ngStyle exemple 1
  currentStyles: any; // objet representant le style, le weight et le size
  isItalic: boolean = false;
  isBold: boolean = false;
  isReSize: boolean = false;
  // ngStyle exemple 2
  color: String = 'lightgrey';

  // ngClass exemple 1
  class: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  // init valeur sur base des booleans
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': this.isReSize ? '24px' : '12px',
    };
  }

  SwitchBold() {
    this.isBold = !this.isBold;
    this.setCurrentStyles();
  }
  SwitchItalic() {
    this.isItalic = !this.isItalic;
    this.setCurrentStyles();
  }
  SwitchSize() {
    this.isReSize = !this.isReSize;
    this.setCurrentStyles();
  }

  SwitchClass() {
    this.class = !this.class;
  }
}
