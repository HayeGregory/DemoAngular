import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { SharedModule } from '../shared/shared.module';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';
import { Demo07bisComponent } from './demo07bis/demo07bis.component';
import { Demo08Component } from './demo08/demo08.component';
import { EnfantComponent } from './demo08/enfant/enfant.component';
import { Demo09Component } from './demo09/demo09.component';
import { AddWordComponent } from './demo09/add-word/add-word.component';
import { ListWordComponent } from './demo09/list-word/list-word.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo10bisComponent } from './demo10bis/demo10bis.component';
import { Demo12Component } from './demo12/demo12.component';
import { RecupParamComponent } from './demo12/recup-param/recup-param.component';
import { Demo14Component } from './demo14/demo14.component';
import { HeaderComponent } from './demo14/header/header.component';
import { AuthComponent } from './demo14/auth/auth.component';
import { Demo15Component } from './demo15/demo15.component';
import { PokelistComponent } from './demo15/pokelist/pokelist.component';
import { PokedetailComponent } from './demo15/pokedetail/pokedetail.component';

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
    Demo07bisComponent,
    Demo08Component,
    EnfantComponent,
    Demo09Component,
    AddWordComponent,
    ListWordComponent,
    Demo10Component,
    Demo10bisComponent,
    Demo12Component,
    RecupParamComponent,
    Demo14Component,
    HeaderComponent,
    AuthComponent,
    Demo15Component,
    PokelistComponent,
    PokedetailComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DemoModule {}
