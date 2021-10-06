import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { FormsModule } from '@angular/forms';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { SharedModule } from '../shared/shared.module';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';

@NgModule({
  declarations: [
    DemoComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    Demo07Component,
  ],
  imports: [CommonModule, DemoRoutingModule, FormsModule, SharedModule],
})
export class DemoModule {}
