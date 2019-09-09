import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private WALK = require("../img/walk.svg");

  private PAW = require("../img/pawprint.svg");

  private WALKER = require("../img/dog-walker.svg");

  constructor() { }

  ngOnInit() {
  }

}
