import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule, Response, Headers,RequestOptions  } from '@angular/http';
import { GirlsPgComponent } from './girlsPg.component';
import { BoysPgComponent} from './boysPg.component';
import { PageNotFoundComponent } from  './notFound.component'; 
import { GandBService } from './gandb.service';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './filter.pipe';
import { MenuComponent } from './menu.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule,
                  FormsModule,
                  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,
                  GirlsPgComponent,
                  BoysPgComponent,
                  PageNotFoundComponent,
                  HomeComponent,
                  MenuComponent,
                  FilterPipe ],
  providers: [GandBService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
