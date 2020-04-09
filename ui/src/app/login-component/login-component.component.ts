import { Component, OnInit } from '@angular/core';
import { AuthService, tokenPayload } from '../auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  cred ={
   
  };
  constructor(private _AuthService:AuthService, private router : Router) { }

  ngOnInit() {
  }
  login(){
    console.log(this.cred);
    
    this._AuthService.login(this.cred)
      .subscribe(arg => {
        console.log(arg);
        
        this._AuthService.saveToken(arg);
        this._AuthService.setLogin();
        this.router.navigateByUrl('/homepage')
          
      });
    
  }

}
