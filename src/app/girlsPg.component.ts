import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';  
import { PinkArrayType } from './pink';
import { GandBService } from './gandb.service';

import { FilterPipe } from './filter.pipe';
import { Pipe, PipeTransform } from '@angular/core' ;

@Component ({
   selector: 'girls-pg',
   templateUrl: 'app/htmlTemplates/girlsPg.component.html',
    styleUrls: ['app/css/girlsPg.component.css'],
    
    providers: [GandBService]
})

export class GirlsPgComponent implements OnInit {
    theGirls: PinkArrayType[] = [];
    theGirlsCopy: PinkArrayType[] = [];
    constructor(private route:Router, private pgperson:GandBService) {
    }

    ngOnInit() : void {
        this.pgperson.getGirls()
        .subscribe(s => this.theGirls = s);

        
     }

     sortType(sort:string){
         this.theGirlsCopy = this.theGirls;
        console.log(this.theGirls);
        console.log(this.theGirlsCopy);
         if(sort === 'Name'){
             this.theGirls = this.theGirlsCopy.sort(this.sortByGirlsName);
             console.log(this.theGirls);
         }
         if(sort === 'Age'){
            this.theGirls = this.theGirlsCopy.sort(this.sortByAge);
            console.log(this.theGirls);
         }
     }

     sortByGirlsName(n1: PinkArrayType, n2:PinkArrayType){
         if(n1.Name.toLocaleLowerCase()>n2.Name.toLocaleLowerCase()) return 1
         else
         if(n1.Name.toLocaleLowerCase() === n2.Name.toLocaleLowerCase() ) return 0
         else
         if(n1.Name.toLocaleLowerCase()<n2.Name.toLocaleLowerCase())
         return -1

     }

     sortByAge(n1: PinkArrayType, n2:PinkArrayType){
         return (n1.Age)- (n2.Age);
     }

     mainmenu(): any{
         console.log("Exiting to main screen");
        this.route.navigate(['']);
     }

}