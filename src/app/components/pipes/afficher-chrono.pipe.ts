import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'afficherChrono',
})
export class AfficherChronoPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    let secondes: number = value % 60;
    let minutes: number = Math.floor(value / 60);
    let output: string = `${minutes < 10 ? '0' : ''}${minutes} minutes ${
      secondes < 10 ? '0' : ''
    }${secondes} secondes`;
    return output;
  }
}
