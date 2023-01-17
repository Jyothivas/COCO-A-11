import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  title="Add Todo List";
  user={
    name:'',
    email:''
  };

  @Output() onAddData= new EventEmitter<{name:string,email:string}>();

  addToList(user:string,email:string){
    this.user.name=user;
    this.user.email=email;
    this.onAddData.emit({name:user,email:email},);
  }
  
   
}
