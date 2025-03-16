import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacsComponent } from './shared/pages/contacs/contacs.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContacsComponent
  },
  {
    path: 'country',
    loadChildren: () => import ('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'country'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
