import { Component, EventEmitter, Output } from '@angular/core';

import { User } from '../users';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() userEdit:EventEmitter<any>=new EventEmitter

//currantItem="Television";
item: any;
users:User[];
editUsers: User[] = [];
constructor(){

this.users=[
{
  email:"amol@gmail.com",
  age:30
},
{
  email:"rohit@gmail.com",
  age:28
}
]
}

  addUser(user:User)
  {
   console.log(user);
   this.users.push(user);
  }
  

 deleteUser(user:User)
 {
   console.log(user);
   const index=this.users.indexOf(user);
   //console.log(index);
   this.users.splice(index,1);
 }

  editUser(user:User)
  {
    console.log(user);
    this.users.push(user);
  }
}
