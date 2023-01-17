import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewListComponent } from './components/view-list/view-list.component';
import { MycontainerComponent } from './components/mycontainer/mycontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    MycontainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
