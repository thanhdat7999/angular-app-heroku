import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-rentroom-form',
  templateUrl: './rentroom-form.component.html',
  styleUrls: ['./rentroom-form.component.css']
})
export class RentroomFormComponent implements OnInit {

  @ViewChild('formRentRoom') formRentRoom!:ElementRef;


  fullName:string="";
  datetime:string="";
  description:string="";

  preElectric:number=0;
  electric:number=0;
  electricResult:number=0;
  electricAmount:number=3.5;
  electricTotal: number=0;
  displayElectricTotal: string="";

  preWater:number=0;
  water:number=0;
  waterResult:number=0;
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
    const format='dd/MM/yyyy';
    const locale='en-US';
    this.datetime= val //formatDate(val,format,locate);
  }

  calculateTotalPrice(){
    this.totalPrice=((this.electricTotal + this.waterTotal + this.roomPrice).toLocaleString('en-GB')) + " VND";
  }

  //Thay doi tien tro
  changeRoomPrice(val: any){
    this.roomPrice=val*1;
    this.displayRoomPrice=this.roomPrice.toLocaleString('en-GB');

    if (isNaN(this.roomPrice) || this.roomPrice < 0)
    {
      console.log(true);
      document.getElementById("roomPriceErrorMessage")!.style.display="block";
      this.roomPrice=0;

      //If error disable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=true;
    } 
    else{
      console.log(false);
      document.getElementById("roomPriceErrorMessage")!.style.display="none";

      //If not error enable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=false;
    }

    this.calculateTotalPrice();
  }

  //T??nh ti???n ??i???n 
  //Khi ti???n ??i???n th??ng tr?????c thay ?????i
  changePreElectricPrice(val: any){
    this.preElectric=val;

    this.electricTotal=this.electricAmount*(this.preElectric - this.electric) * 1000;
    this.electricResult=this.preElectric - this.electric;
    this.displayElectricTotal=this.electricTotal.toLocaleString('en-GB');

    if (isNaN(this.electricTotal) || this.electricTotal < 0)
    {
      console.log(true);
      document.getElementById("electricPriceErrorMessage")!.style.display="block";
      this.electricTotal = 0;

       //If error disable button
       (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=true;
    }
    else{
      console.log(false);
      document.getElementById("electricPriceErrorMessage")!.style.display="none";

      //If not error enable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=false;
    }

    this.calculateTotalPrice();
  }
  //Khi ti???n ??i???n th??ng n??y thay ?????i
  changeElectricPrice(val: any){
    this.electric=val;
    this.electricTotal=this.electricAmount*(this.preElectric - this.electric)*1000;
    this.displayElectricTotal=this.electricTotal.toLocaleString('en-GB');
    this.electricResult=this.preElectric - this.electric;
    if (isNaN(this.electricTotal) || this.electricTotal < 0)
    {
      console.log(true);
      document.getElementById("electricPriceErrorMessage")!.style.display="block";
      this.electricTotal = 0;

       //If error disable button
       (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=true;
    }
    else{
      console.log(false);
      document.getElementById("electricPriceErrorMessage")!.style.display="none";

      //If not error enable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=false;
    }

    this.calculateTotalPrice();
  }
  changeElectricAmount(val: any){
    this.electricAmount=val;
    this.electricTotal=this.electricAmount*(this.preElectric - this.electric)*1000;
    this.displayElectricTotal=this.electricTotal.toLocaleString('en-GB');

    this.calculateTotalPrice();
  }

  //T??nh ti???n n?????c
  //Khi ti???n n?????c th??ng tr?????c thay ?????i
  changePreWaterPrice(val: any){
    this.preWater=val;
    this.waterTotal=this.waterAmount*(this.preWater - this.water)*1000;
    this.displayWaterTotal=this.waterTotal.toLocaleString('en-GB');
    this.waterResult=this.preWater - this.water;
    if (isNaN(this.waterTotal) || this.waterTotal < 0)
    {
      console.log(true);
      document.getElementById("waterPriceErrorMessage")!.style.display="block";
      this.waterTotal = 0;

       //If error disable button
       (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=true;
    }
    else{
      console.log(false);
      document.getElementById("waterPriceErrorMessage")!.style.display="none";

      //If not error enable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=false;
    }
   

    this.calculateTotalPrice();
  }
  //t??nh ti???n n?????c th??ng n??y thay ?????i
  changeWaterPrice(val: any){
    this.water=val;
    this.waterTotal=this.waterAmount*(this.preWater - this.water)*1000;
    this.displayWaterTotal=this.waterTotal.toLocaleString('en-GB');
    this.waterResult=this.preWater - this.water;
    if (isNaN(this.waterTotal) || this.waterTotal < 0)
    {
      console.log(true);
      document.getElementById("waterPriceErrorMessage")!.style.display="block";
      this.waterTotal = 0;

       //If error disable button
       (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=true;
    }
    else{
      console.log(false);
      document.getElementById("waterPriceErrorMessage")!.style.display="none";

      //If not error enable button
      (<HTMLInputElement> document.getElementById("btnPrintPDF")).disabled=false;
    }
   

    this.calculateTotalPrice();
  }
  //T??nh s??? l?????ng n?????c thay ?????i
  changeWaterAmount(val: any){
    this.waterAmount=val;
    this.waterTotal=this.waterAmount*(this.preWater - this.water)*1000;
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
