import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component'
import { CharacterListComponent } from './main/character-list/character-list.component';
import { AboutComponent } from './main/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CharacterDetailsComponent } from './main/character-details/character-details.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path:'home' ,
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(["/login"]))
  },
  {
    path:'character-list',
    component: CharacterListComponent,
    ...canActivate(() => redirectUnauthorizedTo(["/login"]))
  },
  {
    path:'about-us',
    component: AboutComponent,
    ...canActivate(() => redirectUnauthorizedTo(["/login"]))
  },
  {
    path:'character-detail/:id',
    component: CharacterDetailsComponent,
    ...canActivate(() => redirectUnauthorizedTo(["/login"]))
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path:'**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
