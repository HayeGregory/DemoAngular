import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';

@NgModule({
  declarations: [ToFahrenheitPipe, TemperaturePipe],
  imports: [CommonModule],
  exports: [ToFahrenheitPipe, TemperaturePipe],
})
export class SharedModule {}
