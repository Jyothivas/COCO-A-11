import { Component, EventEmitter, Input, Output,NgModule } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { User } from '../users';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
@Output()  userAdd:EventEmitter<any>=new EventEmitter;


  constructor(){}
   profileForm = new FormGroup({
    email: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
  });

 //  profileForm:FormGroup;
//   constructor(public fb:FormBuilder){
//    this.profileForm = fb.group({
//     email: ['',Validators.required],
//     age: ['',Validators.required],
//   });
// }


  onSubmit(){
    //console.log(item);
     this.userAdd.emit(this.profileForm.value);
  }

  
  

}
