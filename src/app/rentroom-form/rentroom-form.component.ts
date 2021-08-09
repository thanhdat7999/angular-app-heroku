import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import { FLOAT, float } from 'html2canvas/dist/types/css/property-descriptors/float';
@Component({
  selector: 'app-rentroom-form',
  templateUrl: './rentroom-form.component.html',
  styleUrls: ['./rentroom-form.component.css']
})
export class RentroomFormComponent implements OnInit {

  @ViewChild('formRentRoom') formRentRoom!:ElementRef;


  fullName:string="";
  date:string="";
  description:string="";

  electric:number=0;
  electricAmount:number=3.5;
  electricTotal: number=0;
  displayElectricTotal: string="";

  water:number=0;
  waterAmount:number=3.5;
  waterTotal:number=0;
  displayWaterTotal: string="";

  roomPrice:number=0;
  displayRoomPrice:string="";

  totalPrice:String="";

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
    this.totalPrice=((this.electricTotal + this.waterTotal + this.roomPrice).toLocaleString('en-GB'));
  }

  changeRoomPrice(val: any){
    this.roomPrice=val*1;
    this.displayRoomPrice=this.roomPrice.toLocaleString('en-GB');
    
    this.calculateTotalPrice();
  }

  changeElectricPrice(val: any){
    this.electric=val;
    this.electricTotal=this.electricAmount*this.electric;
    this.displayElectricTotal=this.electricTotal.toLocaleString('en-GB');

    this.calculateTotalPrice();
  }
  changeElectricAmount(val: any){
    this.electricAmount=val;
    this.electricTotal=this.electricAmount*this.electric;
    this.displayElectricTotal=this.electricTotal.toLocaleString('en-GB');

    this.calculateTotalPrice();
  }

  changeWaterPrice(val: any){
    this.water=val;
    this.waterTotal=this.waterAmount*this.water;
    this.displayWaterTotal=this.waterTotal.toLocaleString('en-GB');

    this.calculateTotalPrice();
  }
  changeWaterAmount(val: any){
    this.waterAmount=val;
    this.waterTotal=this.waterAmount*this.water;
    this.displayWaterTotal=this.waterTotal.toLocaleString('en-GB');

    this.calculateTotalPrice();
  }

  getDescription(val:any){
    this.description=val;
  }

  printPDF(){
    console.log("Run print pdf");

    var test =document.getElementById("capture")!; //use ! to avoid error htmlelement | null
    console.log(test);
    document.getElementById("capture")!.style.display="block";
    html2canvas(test).then((canvas)=>{
      console.log(canvas);

      //var imgHeight=canvas.height * 208 / canvas.width;
      
      var imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      
      var doc = new jsPDF('p', 'mm', "a4");
      // var doc = new jsPDF({
      //   orientation:"portrait",
      //   unit:"in",
      //   format:[8,8]
      // });
      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      console.log(width);
      console.log(height);
      doc.addImage(imgData,'PNG',0,2,302,68);
      doc.save("image.pdf");
    });
    document.getElementById("capture")!.style.display="none";
  }
}
