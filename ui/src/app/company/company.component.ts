import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
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
