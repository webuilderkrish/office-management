import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forget-passowrd',
  templateUrl: './forget-passowrd.component.html',
  styleUrls: ['./forget-passowrd.component.css']
})
export class ForgetPassowrdComponent implements OnInit {
  
  public email;

  constructor(private _crudService: CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit( ) {

  }

  onSubmit(){
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
    {
     
    this._crudService.checkMail(this.email).subscribe((data: any) => {
        if (data) {
          this._crudService.forgetPassword(this.email).subscribe((data: any) => {
            this._snackBar.open(data,'Success', {
              duration: 2000,
            });
          })
        }
        else{
          this._crudService.forgetPassword(this.email).subscribe((data: any) => {
            this._snackBar.open("User Email Id Is Not Exist",'Success', {
              duration: 2000,
            });
        });

    }
  })
  }
  else{
    this._snackBar.open("Please Enter Proper Email",'Success', {
      duration: 2000,
    });
  }
}
}
