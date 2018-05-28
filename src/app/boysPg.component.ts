import { Component } from '@angular/core';
import { Router }  from '@angular/router';  

@Component ({
   selector: 'boys-comp',
   templateUrl: 'app/htmlTemplates/boysPg.component.html',
    styleUrls: ['app/css/boysPg.component.css']
})
export   class   BoysPgComponent  {

    constructor(private route:Router){

    }


    mainmenu(): any{
        console.log("Exiting to main screen");
       this.route.navigate(['']);
    }
}