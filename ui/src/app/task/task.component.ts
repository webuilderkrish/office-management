import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public data = [];
  public url = 'task'
  
  constructor( public dialog:MatDialog, private crudService : CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetch();
  }
  fetch(){
    // //this.crudService.getALlRecords(this.url).subscribe((data:any) => {
    //   if (data == "No record found") {
    //     this.data = []; 
    //     return;
    //   }
    //   this.data =  data;
    // })
  }

  deleteCompany(id){
    this.crudService.deleteRecord(this.url,id).subscribe((data:any) => {
      this.fetch();
      this._snackBar.open(data,'delete', {
        duration: 2000,
      });
      
    })
  }
 

}
