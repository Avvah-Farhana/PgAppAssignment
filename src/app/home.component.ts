import { Component, OnInit} from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {GandBService} from './gandb.service';
import { PinkArrayType } from "./pink";
import { Router }  from '@angular/router';  


@Component({
  selector: 'home-button',
  templateUrl: 'app/htmlTemplates/home.component.html',
  styleUrls: ['app/css/home.component.css'],
  providers: [GandBService]
})
export class HomeComponent { 

 
 }
