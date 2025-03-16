import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacsComponent } from './pages/contacs/contacs.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacsComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomepageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacsComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
