import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactivepracticeformComponent } from './reactivepracticeform/reactivepracticeform.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { NgswitchtempComponent } from './ngswitchtemp/ngswitchtemp.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ReactivepracticeformComponent,
    NgtemplateComponent,
    NgswitchtempComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
