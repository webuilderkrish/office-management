import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  cred ={};
  constructor(private _AuthService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this._AuthService.login(this.cred)
      .subscribe(arg => {
        
      });
    
  }

}
