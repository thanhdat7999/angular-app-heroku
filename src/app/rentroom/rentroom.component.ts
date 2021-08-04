import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentroom',
  templateUrl: './rentroom.component.html',
  styleUrls: ['./rentroom.component.css']
})
export class RentroomComponent implements OnInit {
  tabNum:string = "2";
  constructor() { }

  ngOnInit(): void {
  }
  tabClick(tabNumber:string){
    this.tabNum=tabNumber;
  }
}
