import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { AfficherChronoPipe } from '../pipes/afficher-chrono.pipe';

@NgModule({
  declarations: [ToFahrenheitPipe, TemperaturePipe, AfficherChronoPipe],
  imports: [CommonModule],
  exports: [ToFahrenheitPipe, TemperaturePipe, AfficherChronoPipe],
})
export class SharedModule {}
