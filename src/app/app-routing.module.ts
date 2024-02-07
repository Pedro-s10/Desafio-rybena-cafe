import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutCoffeComponent} from "./pages/about-coffe/about-coffe.component";
import {TypicalDishesComponent} from "./pages/typical-dishes/typical-dishes.component";
import {CoffeeDrinksComponent} from "./pages/coffee-drinks/coffee-drinks.component";

const routes: Routes = [
  {
    path: '', pathMatch: "full",
    redirectTo: 'sobre'
  },

  {
    path: 'sobre',
    component: AboutCoffeComponent
  },

  {
    path: 'pratos-tipicos',
    component: TypicalDishesComponent
  },

  {
    path: 'bebidas',
    component: CoffeeDrinksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
