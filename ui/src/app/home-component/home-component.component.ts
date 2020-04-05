import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/login')
  }

}
