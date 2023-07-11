import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { CharacterListComponent } from './main/character-list/character-list.component';
import { AboutComponent } from './main/about/about.component';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './main/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    AboutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
