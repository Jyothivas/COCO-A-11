import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivepracticeform',
  templateUrl: './reactivepracticeform.component.html',
  styleUrls: ['./reactivepracticeform.component.css']
})
export class ReactivepracticeformComponent {
  registerForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  });
  onSubmit(){
    console.log(this.registerForm.value);
  }
}
