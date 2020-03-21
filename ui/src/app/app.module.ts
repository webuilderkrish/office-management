import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDialogModule, MatDialogActions, MatFormFieldModule, MatDividerModule, MatInputModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UserComponentComponent,
    HomeComponentComponent
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
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
