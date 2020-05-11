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
  public showlink = false;
  public companies = [];
  public size = 1000000;
  public page = 1;
  public model = { date: Date.now(), name: '' };
  public totalCompleted = 0;
  public totalPending = 0;
  public search = '';
  public status = null;
  public url = 'task'
  public daywisetotal = 0;
  public daywisestarred = 0;
  public daywisepending = 0;
  public date = Date.now();
  public details = {};
  show: boolean;
  constructor(public dialog: MatDialog, private crudService: CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetch();
    this.fetch2('today');
  }

  fetch() {
    this.crudService.getALlRecords(this.url, this.page, this.size, this.search).subscribe((data: any) => {
      if (data == "No record found") {
        this.data = [];
        return;
      }
      this.crudService.getALlRecords('company',this.page, this.size, this.search).subscribe((comp: any) => {
        this.companies = comp;
      })

      this.data = data;
      data.forEach(element => {
        if (element.status) {
          this.totalCompleted = this.totalCompleted + 1;
        } else {
          this.totalPending = this.totalPending + 1;
        }
      });
    })
  }


  SelectTask(model) {
    if (model.status == true || model.isStarred == true) {
        this.status = 'Updated';
    }
    else{  
      this.status = 'Pending';
    }
    this.details = model;
    this.show =true;
  }

  fetch2(type) {
    this.daywisetotal = 0;
    this.daywisestarred = 0;
    this.daywisepending = 0;
    var date = new Date();
   
    if (type == 'today') {
      this.data.forEach(element => {
       
        var cdate = new Date(element.date).getDate();
        if (cdate == date.getDate()) {
          
          this.daywisetotal = this.daywisetotal + 1;
          if (element.isStarred) {
            this.daywisestarred = this.daywisestarred + 1;
          }
          if (element.status) {
            this.daywisepending = this.daywisepending + 1;
          }
        }
      })

    }
    if (type == 'week') {
      var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
      var firsday = new Date(date.setDate(diff));
      var day = date.getDate() - (date.getDay() - 1) + 6;
      var lastday =  new Date(date.setDate(day));
    
      this.data.forEach(element => {
        var cdate = new Date(element.date).getDate();
        if (cdate > firsday.getDate() || cdate <= lastday.getDate()) {
          this.daywisetotal = this.daywisetotal + 1;
          if (element.isStarred) {
            this.daywisestarred = this.daywisestarred + 1;
          }
          if (element.status) {
            this.daywisepending = this.daywisepending + 1;
          }
        }
      })
    }
    if (type == 'future') {
      this.data.forEach(element => {
        var cdate = new Date(element.date).getDate();
        if (cdate > date.getDate()) {
          this.daywisetotal = this.daywisetotal + 1;
          if (element.isStarred) {
            this.daywisestarred = this.daywisestarred + 1;
          }
          if (element.status) {
            this.daywisepending = this.daywisepending + 1;
          }
        }
      })
    }
  }
  Save() {
    if (this.model.name == '') {
      this._snackBar.open('Please Fill Proper Date', 'Error', {
        duration: 2000,
      });
      return;
    }
    this.crudService.addRecordOrUpdate(this.url, this.model).subscribe((data: any) => {
      this.fetch();
      this._snackBar.open('Task Added Successfully', 'Save', {
        duration: 2000,
      });

    })
  }

  clicked(model) {
    if (model.isStarred) {
      model.isStarred = false;
    }
    else {
      model.isStarred = true;
    }
    this.crudService.addRecordOrUpdate(this.url, model).subscribe((data: any) => {
      this.fetch();
      this._snackBar.open('Task Updated Successfully', 'Save', {
        duration: 2000,
      });

    })
  }
  changed(model, event) {
    if (event.currentTarget.checked) {
      model.status = true;
    } else {
      model.status = false;
    }
    this.crudService.addRecordOrUpdate(this.url, model).subscribe((data: any) => {
      this.fetch();
      this._snackBar.open('Task Updated Successfully', 'Save', {
        duration: 2000,
      });

    })
  }
  deleteTask(id) {
    this.crudService.deleteRecord(this.url, id).subscribe((data: any) => {
      this.fetch();
      this._snackBar.open(data, 'delete', {
        duration: 2000,
      });

    })
  }


}
