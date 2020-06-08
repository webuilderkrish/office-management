import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  public password = "";
  public show = false;
  public res = false;
  public cpassword = "";
 
  constructor(private _AuthService:AuthService,private _snackBar: MatSnackBar,  private _crudservice: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.fetch();
    if(this._AuthService.isLoggedIn()){
      this.router.navigateByUrl('/company')
    }
  }
  public fetch(){
    let check = this._crudservice.checkUser(this.route.snapshot.params.guid).subscribe(
      data => {
        console.log(data);
        
        if (data) {
          this.res = true;
          this.show = true;
        }
        this.res = false;
      }
    )
  }

  public onSubmit(){
    if(this.password.length > 5 && this.password == this.cpassword)
      this._crudservice.updatePassword(this.password, this.route.snapshot.params.guid).subscribe(data => {
        this.router.navigateByUrl("/login");
        this._snackBar.open("Password Updated Successfully",'Error', {
          duration: 2000,
        });
      });
      else{
        this._snackBar.open("Password Length Should Be More Than 5 Characters Or Check Confirm Password",'Error', {
          duration: 2000,
        });
      }
  }
}
