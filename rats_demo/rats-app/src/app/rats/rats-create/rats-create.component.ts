import { Component, OnInit } from '@angular/core';

import { Rat } from "./../rat"

import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-create',
  templateUrl: './rats-create.component.html',
  styleUrls: ['./rats-create.component.css']
})
export class RatsCreateComponent implements OnInit {

  new_rat: Rat = new Rat()

  constructor(private rat_service: RatService) { }

  ngOnInit() {
  }

  create(){
  	this.rat_service.create(this.new_rat)
  	this.new_rat = new Rat()
  }

}
