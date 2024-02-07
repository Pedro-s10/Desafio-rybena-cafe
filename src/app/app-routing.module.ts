import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutCoffeComponent} from "./pages/about-coffe/about-coffe.component";

const routes: Routes = [
  {
    path: '', pathMatch: "full",
    redirectTo: 'sobre'
  },

  {
    path: 'sobre',
    component: AboutCoffeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
