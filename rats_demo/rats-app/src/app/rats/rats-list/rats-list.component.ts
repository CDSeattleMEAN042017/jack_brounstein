import { Component, OnInit } from '@angular/core';

import { Rat } from "./../rat"

import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-list',
  templateUrl: './rats-list.component.html',
  styleUrls: ['./rats-list.component.css']
})
export class RatsListComponent implements OnInit {

  constructor(private rat_service: RatService) { }

  ngOnInit() {
  }

  delete(id){
  	this.rat_service.delete(id)
  }

}
