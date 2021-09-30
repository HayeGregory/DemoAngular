import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'demo',
    loadChildren: () =>
      import('./components/demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'exo',
    loadChildren: () =>
      import('./components/exo/exo.module').then((m) => m.ExoModule),
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
