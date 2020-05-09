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
  public model = {date:Date.now(), name:''};
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

  Save(){
    if (this.model.name == '') {
      this._snackBar.open('Please Fill Proper Date','Error', {
        duration: 2000,
      });
      return;
    }
    this.crudService.addRecordOrUpdate(this.url, this.model).subscribe((data:any) => {
      this.fetch();
      this._snackBar.open('Task Added Successfully','Save', {
        duration: 2000,
      });
      
    })
  }

  changed(model, event){
    if (event.currentTarget.checked) {
       model.status = true;
    } else {
      model.status = false;
    }
    this.crudService.addRecordOrUpdate(this.url, model).subscribe((data:any) => {
      this.fetch();
      this._snackBar.open('Task Updated Successfully','Save', {
        duration: 2000,
      });
      
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
