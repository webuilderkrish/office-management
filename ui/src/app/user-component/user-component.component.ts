import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth-service';
import { MatSnackBar } from '@angular/material';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {
  public model:any = {};
  public user:any = '';
  public pass = '';
  public url = 'user';
  constructor( private _snackBar: MatSnackBar,private _router: Router, private _CrudService: CrudService, private _AuthService: AuthService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('email');;
    console.log(this.user);
    this.fetch()
  }

  fetch(){
    this._CrudService.getOneRecord(this.url, this.user).subscribe((data: any) => {
      if (this.user == null) {
        this.model = {};
        return;
      }
     // console.log(data);
      
      this.model = data[0];
    })
  }

  Save(){
    if(this.pass != ''){
      this.model.password = this.pass; 
    }
    this._CrudService.addRecordOrUpdate('user',this.model).subscribe((data: any) => {
      this._snackBar.open('User Updated Successfully', 'Save', {
        duration: 2000,
      });
      this._AuthService.setUpdate(this.model.Email);
      console.log(this.model.Email);
      
      this._router.navigateByUrl('/company')
    })
  }

  
}
