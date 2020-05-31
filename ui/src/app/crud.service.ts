import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient, private router:Router) { }

  addRecordOrUpdate(url, record){
    const list = this.http.post('/api/' + url + '/', record);
    return list;
  }
  getALlRecords(url,page,size, search){
    const list = this.http.get('/api/' + url + '/?page='+page+'&size='+size+'&search='+search);
    return list;
  }

  getOneRecord(url, id){
    const list = this.http.get('/api/' + url + '/' + id);
    return list;
  }
  deleteRecord(url, id){
    const list = this.http.delete('/api/' + url + '/' + id);
    return list;
  }

  checkMail(email){
    const check = this.http.get('/api/user/checkmail/' + email);
    return check;
  }

  forgetPassword(email){
    const sendMail = this.http.get('/api/cred/forgetpassword/' + email)
    return sendMail;
  }
}
