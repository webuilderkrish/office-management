import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudService } from '../crud.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public url = 'company';
  public totalPages = 0;
  public data:any = {};
  public size = 10;
  public page = 1;
  public search = '';
  constructor( public dialog:MatDialog, private crudService : CrudService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetch();
  }
  changePage(page){
    this.page = page;
    this.fetch;
  }
  fetch(){
    this.crudService.getALlRecords(this.url,this.page,this.size,this.search).subscribe((data:any) => {
      if (data == "No record found") {
        this.data = [];
          return;   
      }
      this.data =  data;
      this.totalPages = Math.ceil(this.data.totalRecord / this.size);
      
    })
  }

  deleteCompany(id){
    this.crudService.deleteRecord(this.url,id).subscribe((data:any) => {
      this.data = [];
      this.fetch();
      this._snackBar.open(data,'delete', {
        duration: 2000,
      });
      
    })
  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(addCompanyModel, {
      width: '600px',
      height: '500px',
      data : {key : id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetch(); 
    });
  }

}

@Component({
  selector: 'addCompanyModel',
  templateUrl: './addCompanyModel.html',
})

export class addCompanyModel {
  public payload = {};

  constructor( 
    private _snackBar: MatSnackBar,
    private crudService : CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<addCompanyModel>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
   
    if (this.data.key != undefined) {
      this.fetch();
    }
    
  }
  fetch(){
   
    this.crudService.getOneRecord('company',this.data.key ).subscribe((data:any) => {
      if (data == "No record found") {
        this.data = []; 
        return 
      }
      this.payload =  data[0];
      
    })
  }

  saveRecord(){
    this.crudService.addRecordOrUpdate('company',this.payload).subscribe(data => {
      this._snackBar.open('Company Added Successfully','Add', {
        duration: 2000,
      });
      this.dialogRef.close();
    })
  }
}
