import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule, MatSelectModule, MatDatepicker} from '@angular/material';
import { routes } from './app-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { UserComponent } from './user-component/user-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContactComponent, addContactModel } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent, addCompanyModel } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ForgetPassowrdComponent } from './login-component/forget-passowrd/forget-passowrd.component';
import { UpdatePasswordComponent } from './login-component/update-password/update-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ContactComponent,
    CompanyComponent,
    TaskComponent,
    addCompanyModel,
    addContactModel,
    ForgetPassowrdComponent,
    UpdatePasswordComponent
  ],
  imports: [
    MatSnackBarModule,
    MatDividerModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule, 
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [addCompanyModel, addContactModel]
})
export class AppModule { }
