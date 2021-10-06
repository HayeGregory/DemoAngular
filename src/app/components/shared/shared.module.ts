import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { AfficherChronoPipe } from '../pipes/afficher-chrono.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TemperaturePipe,
    AfficherChronoPipe,
    HighlightDirective,
  ],
  imports: [CommonModule],
  exports: [
    ToFahrenheitPipe,
    TemperaturePipe,
    AfficherChronoPipe,
    HighlightDirective,
  ],
})
export class SharedModule {}
