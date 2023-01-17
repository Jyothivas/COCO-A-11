import { Component } from '@angular/core';

@Component({
  selector: 'app-mycontainer',
  templateUrl: './mycontainer.component.html',
  styleUrls: ['./mycontainer.component.css']
})
export class MycontainerComponent {
  title = 'todo-list';
  
  list:any[]=[];

  addToList(todoItem:{name:string,email:string}){
    this.list.push([this.list.length+1,todoItem.name,todoItem.email]);
    console.log(this.list);
  }

  removeToList(id:number){
    this.list= this.list.filter((item)=>item[0]!==id);
    for (let i = 0; i < this.list.length; i++) {
      this.list[i][0] = i+1;
      
    }
  }



  
}
