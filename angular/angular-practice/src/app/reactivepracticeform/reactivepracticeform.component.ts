import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivepracticeform',
  templateUrl: './reactivepracticeform.component.html',
  styleUrls: ['./reactivepracticeform.component.css']
})
export class ReactivepracticeformComponent {
  registerForm:any;
    Name:string = '';
    Email:string = '';
    Password:string = '';
  
    constructor( frmbuilder:FormBuilder){
      this.registerForm= frmbuilder.group({
        username:['',[Validators.required,Validators.maxLength(10)]],
        email:['',[Validators.email,Validators.required]],
        password:['',Validators.required]
      });
    }
  postData(registerForm:NgForm){
    console.log(registerForm.controls);
  }



  resetForm(){
    this.registerForm.reset();
  }
}
