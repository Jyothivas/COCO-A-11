import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {

  @Input() data:any[]=[];
 
  @Output() removeItemData = new EventEmitter<number>();
 
  removeItem(id:number){
    this.removeItemData.emit(id);
  }
 

}
