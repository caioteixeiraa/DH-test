import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { ApiService } from 'app/api.service';
import { Walker } from '../walker';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-walkers-list',
  templateUrl: './walkers-list.component.html',
  styleUrls: ['./walkers-list.component.css']
})

export class WalkersListComponent implements OnInit {
  walkers: any;
  
  private PUG = require("../img/pug.jpg");

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit() {
    this.apiService.index('api/v1/walkers').subscribe( 
    walkers => this.walkers = walkers);
  }

}
