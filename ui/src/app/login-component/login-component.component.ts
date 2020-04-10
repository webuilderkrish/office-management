import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService, tokenPayload } from '../auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  @Output("someEvent") someEvent: EventEmitter<any> = new EventEmitter();
  cred ={
  };
  constructor(private _AuthService:AuthService, private router : Router) { }

  ngOnInit() {
    if(this._AuthService.isLoggedIn()){
      this.router.navigateByUrl('/company')
    }
  }
  login(){
    console.log(this.cred);

    this._AuthService.login(this.cred)
      .subscribe(arg => {
        console.log(arg);
        this.someEvent.emit();
        this._AuthService.saveToken(arg);
        this._AuthService.setLogin();
        this._AuthService.emitChange('Data from child');
        this.router.navigateByUrl('/company')
          
      });
    
  }

}
