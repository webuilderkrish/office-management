import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule, MatInputModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { UserComponent } from './user-component/user-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
