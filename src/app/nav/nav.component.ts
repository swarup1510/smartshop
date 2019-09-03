import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#accicon").on("click",function(){
      $("#accountdrop").toggle();
    });
    $("#account").on("click",function(){
      $("#accountdrop").toggle();
    });
    $("#carticon,#cartname").on("click",function(){
      $("#cart").toggle();
    });
  }

}
