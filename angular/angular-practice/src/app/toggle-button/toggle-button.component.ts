import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  name="Cocotechoes";
  show=true;

  toggle(){
    if(this.show===true){
      this.show=false;
    }
    else{
      this.show=true;
    }
  }
}
