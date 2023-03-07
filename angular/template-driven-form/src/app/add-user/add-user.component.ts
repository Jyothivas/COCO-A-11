import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Api } from '../api';
import { User } from '../user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})



export class AddUserComponent {
 email:string='';
 age:number;
 gender:string='';
// model:User=new User("ronny",11,"male");


@Output() userAdd:EventEmitter<Api>=new EventEmitter();


onSubmit(form:NgForm){
 //console.log(form.value)
 this.userAdd.emit(form.value)
}

 

//  onSubmit(): void{
//   const userAdd={
//     name:this.name,
//     age:this.age
//   }
//   console.log(userAdd);
//   this.userAdd.emit(userAdd);
//  }
}
