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
  public size = 1000000;
  public page = 1;
  public model = {};
  public totalPages = 0;
  public search = '';
  public url = 'task'
  public date = Date.now();
  constructor( public dialog:MatDialog, private crudService : CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetch();
  }
  fetch(){
    this.crudService.getALlRecords(this.url,this.page,this.size,this.search).subscribe((data:any) => {
      if (data == "No record found") {
        this.data = []; 
        return;
      }
      this.data =  data;
    })
  }

  deleteTask(id){
    this.crudService.deleteRecord(this.url,id).subscribe((data:any) => {
      this.fetch();
      this._snackBar.open(data,'delete', {
        duration: 2000,
      });
      
    })
  }
 

}
