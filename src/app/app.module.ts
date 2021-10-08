import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoRoutingModule } from './components/demo/demo-routing.module';
import { ExoRoutingModule } from './components/exo/exo-routing.module';
import { FormsModule } from '@angular/forms';
import { ToFahrenheitPipe } from './components/pipes/to-fahrenheit.pipe';
import { TemperaturePipe } from './components/pipes/temperature.pipe';
import { AfficherChronoPipe } from './components/pipes/afficher-chrono.pipe';
import { HighlightDirective } from './components/directives/highlight.directive';
import { WordService } from './components/demo/demo09/service/word.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
