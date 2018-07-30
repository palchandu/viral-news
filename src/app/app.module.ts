import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { AppComponent } from './app.component';
import { ViralNewsComponent } from './viral-news/viral-news.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndianRailwayComponent } from './indian-railway/indian-railway.component';
import { ContactComponent } from './contact/contact.component';
import * as moment from 'moment/moment';
import { NameComponent } from './name/name.component';
const appRoutes:Routes=[
  { path :'',component:ViralNewsComponent },
  { path :'viral',component:ViralNewsComponent },
  { path :'railways',component:IndianRailwayComponent },
  { path :'contact',component:ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ViralNewsComponent,
    HeaderComponent,
    FooterComponent,
    IndianRailwayComponent,
    ContactComponent,
    NameComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AutoCompleteModule,
    NgbModule.forRoot(),
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
