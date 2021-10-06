import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highliht('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highliht('transparent');
  }
  private highliht(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
