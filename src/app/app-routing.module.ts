import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { WorksComponent } from "./works/works.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works', component: WorksComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'works/**', component: WorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
