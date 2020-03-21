import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login-component.component';
import { UserComponent } from './user-component/user-component.component';


export const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserComponent
  }

];