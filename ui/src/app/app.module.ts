import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule} from '@angular/material';
import { routes } from './app-routing.module';
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
    addContactModel
  ],
  imports: [
    MatSnackBarModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [addCompanyModel, addContactModel]
})
export class AppModule { }
