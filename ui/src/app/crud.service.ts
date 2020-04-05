import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient, private router:Router) { }

  getALlRecords(url){
    const list = this.http.get('/api/' + url + '/');
    return list;
  }
}
