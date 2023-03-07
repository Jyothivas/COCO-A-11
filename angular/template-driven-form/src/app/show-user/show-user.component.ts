import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';
import { Api } from '../api';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

// @Input() user!:User
@Input() user:any[]=[]
@Output() userDelete:EventEmitter<number>=new EventEmitter();
@Output() userUpdate:EventEmitter<number>=new EventEmitter();



deleteData(id:number){
  console.log(id);
  this.userDelete.emit(id)
}
updateData(id:number){
//console.log(id);
this.userUpdate.emit(id);
}

}
