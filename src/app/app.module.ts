import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormularyComponent } from './components/formulary/formulary.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { AdminComponent } from './routes/admin/admin.component';
import { LoginComponent } from './routes/login/login.component';
import { Page404Component } from './routes/page404/page404.component';
import { StoreComponent } from './routes/store/store.component';
import { SignupComponent } from './routes/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FormularyComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    Page404Component,
    StoreComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
