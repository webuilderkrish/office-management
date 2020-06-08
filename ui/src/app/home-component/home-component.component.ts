import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {  
  public show : boolean = false;
  public listuser : boolean = false;
  public user;
  constructor(private router: Router, private _AuthService:AuthService) { 
    _AuthService.changeEmitted.subscribe(
      text => {
          this.show = true;
      });
  }
  
  ngOnInit() {
    this.check();
    
  }

  logOut(){
    this.listuser = false;
    this._AuthService.logout();
    this.check();
    
  }
   check(){
     if(this._AuthService.isLoggedIn()){
        this.show= true;
        this.user = this._AuthService.getUserDetails();
        console.log(this.user);
        
     }
     else{
     // this.router.navigateByUrl('/login') 
      this.show= false;
     }
  }
    
}
