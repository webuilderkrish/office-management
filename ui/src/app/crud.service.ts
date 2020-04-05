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
  getALlRecords(url){
    const list = this.http.get('/api/' + url + '/');
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
}
