import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';
import { Demo07bisComponent } from './demo07bis/demo07bis.component';
import { Demo08Component } from './demo08/demo08.component';
import { Demo09Component } from './demo09/demo09.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo10bisComponent } from './demo10bis/demo10bis.component';

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },
      { path: 'demo07bis', component: Demo07bisComponent },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo10bis', component: Demo10bisComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
