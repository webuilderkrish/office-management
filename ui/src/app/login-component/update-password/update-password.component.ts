import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private _crudservice: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.fetch();
    
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
      this._crudservice.updatePassword(this.password, this.route.snapshot.params.guid).subscribe(data => {
        this.router.navigateByUrl("/login");
        
      });
  }
}
