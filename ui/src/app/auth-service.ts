import { Injectable } from '@angular/core';
//import { authenticationService, tokenPayload } from "../services/authentication.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface tokenPayload {

    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient, private router:Router) { }
  private token: string

  
  public saveToken(token: string): void {
      localStorage.setItem('userToken', token)
      this.token = token;

  }

  private getToken(): string {
      if (!this.token) {
          this.token = localStorage.getItem('userToken')
      }

      return this.token;
  }

  public getUserDetails(){
      const token = this.getToken()
      let payload;
      if (token) {
          payload = token.split('.')[1]
          payload = window.atob(payload)
          return JSON.parse(payload)
      } else {
          return null
      }
  }

  public setLogin(){
      const user = this.getUserDetails()
      let key = sessionStorage.setItem('username', user.first_name)
  }
  public isLoggedIn(): boolean {
      let user = sessionStorage.getItem('username');
      if (user) {
          return true;
      } else {
          return false
      }
  }


  public login(user):Observable<any> {
      const base = this.http.post('/api/cred/login', user)
      return base
  }

  public logout(): void {
      this.token = '';
      sessionStorage.removeItem('username');
      this.router.navigateByUrl('/login');

  } 
}
