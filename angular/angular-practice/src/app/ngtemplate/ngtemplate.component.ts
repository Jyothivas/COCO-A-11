import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent {
  display=false;

  employee=[
    {name:'karan',email:'karan@gmail.com',salary:30000},
    {name:'rohit',email:'rohit@gmail.com',salary:10000},
    {name:'rahul',email:'rahul@gmail.com',salary:20000},
  ]
}
