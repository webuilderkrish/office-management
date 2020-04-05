import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public data:any[] = [];
  constructor( public dialog:MatDialog, private crudService : CrudService) { }

  ngOnInit() {
    this.fetch();
  }
  fetch(){
    this.crudService.getALlRecords('company').subscribe((data:any) => {
      this.data = data;
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(addCompanyModel, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}

@Component({
  selector: 'addCompanyModel',
  templateUrl: './addCompanyModel.html',
})

export class addCompanyModel {

  constructor(
    public dialogRef: MatDialogRef<addCompanyModel>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
