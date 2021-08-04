import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-rentroom-form',
  templateUrl: './rentroom-form.component.html',
  styleUrls: ['./rentroom-form.component.css']
})
export class RentroomFormComponent implements OnInit {

  @ViewChild('formRentRoom') formRentRoom!:ElementRef;


  fullName:string="";
  date:string="";

  electric:number=0;
  electricAmount:number=3.5;
  electricTotal:number=0;

  water:number=0;
  waterAmount:number=3.5;
  waterTotal:number=0;

  roomPrice:number=0;

  totalPrice:number=0;

  constructor() { }

  ngOnInit(): void {
    this.electricTotal=this.electricAmount * this.electric;
  }
  getName(val: any){
    this.fullName=val;
  }
  getDate(val: any){
    this.date=val;
  }

  calculateTotalPrice(){
    this.totalPrice= this.electricTotal + this.waterTotal + this.roomPrice;
  }

  changeRoomPrice(val: any){
    this.roomPrice=val*1;

    this.calculateTotalPrice();
  }

  changeElectricPrice(val: any){
    this.electric=val;
    this.electricTotal=this.electricAmount*this.electric;

    this.calculateTotalPrice();
  }
  changeElectricAmount(val: any){
    this.electricAmount=val;
    this.electricTotal=this.electricAmount*this.electric;

    this.calculateTotalPrice();
  }

  changeWaterPrice(val: any){
    this.water=val;
    this.waterTotal=this.waterAmount*this.water;

    this.calculateTotalPrice();
  }
  changeWaterAmount(val: any){
    this.waterAmount=val;
    this.waterTotal=this.waterAmount*this.water;

    this.calculateTotalPrice();
  }


  printPDF(){
    console.log("Run print pdf");

    var test =document.getElementById("capture")!; //use ! to avoid error htmlelement | null
    document.getElementById("capture")!.style.display="block";
    html2canvas(test).then((canvas)=>{
      console.log(canvas);

      var imgHeight=canvas.height * 208 / canvas.width;
      var imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      
      var doc = new jsPDF('p', 'mm', "a6");
      // var doc = new jsPDF({
      //   orientation:"portrait",
      //   unit:"in",
      //   format:[8,8]
      // });
      
      doc.addImage(imgData,'PNG',0,0,100,40);
      doc.save("image.pdf");
    });
    document.getElementById("capture")!.style.display="none";
  }
}
