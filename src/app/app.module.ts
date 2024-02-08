import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { AboutCoffeComponent } from './pages/about-coffe/about-coffe.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from "@angular/material/tooltip";
import { TypicalDishesComponent } from './pages/typical-dishes/typical-dishes.component';
import {CoffeeDrinksComponent} from "./pages/coffee-drinks/coffee-drinks.component";
import { FooterComponent } from './pages/footer/footer.component';
import { ModalDetailsCoffeComponent } from './dialogs/modal-details-coffe/modal-details-coffe.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutCoffeComponent,
    TypicalDishesComponent,
    CoffeeDrinksComponent,
    FooterComponent,
    ModalDetailsCoffeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
