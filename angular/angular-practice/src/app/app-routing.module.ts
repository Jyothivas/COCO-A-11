import {  NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { NgswitchtempComponent } from './ngswitchtemp/ngswitchtemp.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { ReactivepracticeformComponent } from './reactivepracticeform/reactivepracticeform.component';

const routes: Routes = [
  {  path:'templateform', component:InputFormComponent},
  { path:'reactivefrom', component:ReactivepracticeformComponent},
  { path:'ngFor', component:NgtemplateComponent},
  { path:'ngSwitch', component:NgswitchtempComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
