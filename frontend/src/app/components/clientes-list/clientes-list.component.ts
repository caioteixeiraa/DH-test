import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { ApiService } from 'app/api.service';
import { Cliente } from '../cliente';
import { Pet } from '../pet';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: any;
  pets: any;

  private PUG = require("../img/pug.jpg");

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //Get data from clientes
    this.apiService.index('api/v1/clientes').subscribe( 
    clientes => this.clientes = clientes);

    //Get data from pets
    this.apiService.index('api/v1/pets').subscribe( 
    pets => this.pets = pets);
  }

}
