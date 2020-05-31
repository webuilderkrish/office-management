import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login-component.component';
import { UserComponent } from './user-component/user-component.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home-component/home-component.component';
import { ForgetPassowrdComponent } from './login-component/forget-passowrd/forget-passowrd.component';
import { UpdatePasswordComponent } from './login-component/update-password/update-password.component';
import { AuthGuardService } from './auth-guard.service';



export const routes: Routes = [
  

  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgetPassowrdComponent
  },
  {
    path: 'changepassword/:guid',
    component: UpdatePasswordComponent
  },
  {
    path : 'user',
    component : UserComponent,
    canActivate: [AuthGuardService]
  },

  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'',
    component:CompanyComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'company',
    component:CompanyComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'task',
    component:TaskComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate: [AuthGuardService]
  }

];