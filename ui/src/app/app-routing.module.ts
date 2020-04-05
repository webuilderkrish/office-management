import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login-component.component';
import { UserComponent } from './user-component/user-component.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'task',
    component:TaskComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }

];