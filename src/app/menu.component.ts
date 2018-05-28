import { Component, OnInit} from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {GandBService} from './gandb.service';
import { PinkArrayType } from "./pink";
import { Router }  from '@angular/router';  
import { NgForm } from '@angular/forms';


@Component({
  selector: 'menu-button',
  templateUrl: 'app/htmlTemplates/menu.component.html',
  styleUrls: ['app/css/menu.component.css'],
  providers: [GandBService]
})
export class MenuComponent implements OnInit { 

  memb: Object={};
  addMember: boolean;
  pinkArrayTypes: PinkArrayType[];
  constructor (private girl:GandBService, private route:Router) {
    this.addMember = false;
  }
  
  
  ngOnInit() : void {
    this.girl.getGirls()
    .subscribe(pinkArrayTypes => this.pinkArrayTypes = pinkArrayTypes);
 }

 
 gotogirlspg(): any{
     
    console.log("im in a fuction");
     this.route.navigate(['home/girls']);
 }

 gotoboyspg(): any{
     
    console.log("im in a boys fuction");
     this.route.navigate(['home/boys']);
 }


 openForm(){
   if(this.addMember == true){
     this.addMember = false;
   }
   else
    this.addMember = true;
 }

 onSubmitTemplateBased()
	{
		this.addmemb(this.memb);
		console.log(this.memb);
  }
  
  addmemb(memb:any)
	{
		this.girl.addmemb(memb)
		.map((res:Response)=>res)
        .subscribe(
        (response) => {
            /* this function is executed every time there's a new output */
           console.log("VALUE RECEIVED: "+response);
        //    location.reload();
          //  this.toasterService.pop('success', 'Added', 'Company Added Sucessfully');

        },
        (err) => {
            /* this function is executed when there's an ERROR */
            console.log("ERROR: "+err);
        },
        () => {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("COMPLETED");
        }
        );
  }
  
  SubmitMember(f: NgForm){
    f.resetForm();
  }
}