import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../users';


@Component({
  selector: 'app-storvalues',
  templateUrl: './storvalues.component.html',
  styleUrls: ['./storvalues.component.css']
})
export class StorvaluesComponent {
  @Input() user!: User
  @Output() userDelete:EventEmitter<User>=new EventEmitter
  @Output() userEdit:EventEmitter<User>=new EventEmitter

  onClick(user:User){
    console.log("clicked");
    this.userDelete.emit(user);
  }
  onEdit(user:User){
    console.log("clicked");
    this.userEdit.emit(user);
  }
}
