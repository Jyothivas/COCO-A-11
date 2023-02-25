import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { StorvaluesComponent } from './storvalues/storvalues.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// const routes:Routes=[
// {path:'home', component:HomeComponent,
// children:[
//   {path:'child-a',component:ChildAComponent},
//   {path:'child-b',component:ChildBComponent}
// ],
// },
// {path:'addUser',component:FormComponent},
// {path:'main',component:MainComponent},
// {path:'',redirectTo:"/home", pathMatch:'full'},
// {path: '**', component: PageNotFoundComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StorvaluesComponent,
    AddItemsComponent,
    NavbarComponent,
    HomeComponent,
    ChildAComponent,
    ChildBComponent,
    PageNotFoundComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
   RouterModule.forRoot([
   {path:'home', component:HomeComponent,
    children:[
    {path:'child-a',component:ChildAComponent},
    {path:'child-b',component:ChildBComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
    ],
  },
  {path:'',redirectTo:"/home", pathMatch:'full'},
  {path:'addUser',component:FormComponent},
  {path:'main',component:MainComponent},
  {path: '**', component: PageNotFoundComponent}
 ]),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
