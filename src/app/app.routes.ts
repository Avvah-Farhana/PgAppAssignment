import { Routes } from '@angular/router';
import { GirlsPgComponent } from './girlsPg.component';
import { BoysPgComponent} from './boysPg.component';
import { PageNotFoundComponent } from  './notFound.component';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        children:[
            { path: '', component: MenuComponent},
            { path: 'home/girls', component: GirlsPgComponent },
            { path: 'home/boys', component: BoysPgComponent },
    
        ]}
        // { path: '**', component: PageNotFoundComponent }
  ];