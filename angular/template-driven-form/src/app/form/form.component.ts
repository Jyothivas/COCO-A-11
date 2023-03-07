import { Component, ViewChild } from '@angular/core';
import { ConfigService } from '../config.service';
import { ApiTypeService } from '../api-type.service';
import { User } from '../user';
import { Config } from '../config';
import { Api } from '../api';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
//  users:User[]=[];
//   headers!: string[];
//   contents!: string;
  userData:Api[]=[];

   @ViewChild('myForm')form: NgForm;

  
 
 constructor(private route:ActivatedRoute,private configService:ConfigService, private downloaderService:ConfigService, private apiTypeService:ApiTypeService){

  // this.users=[
  //   {
  //     name:"amol",
  //     age:20
  //   }
  // ]
}
ngOnInit(){
  this.showData();
  
}


showData(){
  this.apiTypeService.getUserData().subscribe((data)=>this.userData=data)
  console.log(this.userData);
}

 addData(user:Api){
  console.log(user);
  this.userData.push(user);
  this.apiTypeService.addUser(user).subscribe((res)=>{
    console.warn(res);
  })
 }


 deleteData(id:number){
   this.apiTypeService.deleteUser(id).subscribe((res)=>{
    console.log(res);
   });
 }
 
  updateData(id:number){
  console.log(id);
  //get the user to the id
  let currantUser=this.userData.find((u)=>{return (u.id === id)});
  console.log(currantUser);
  // this.form.setValue({
  //    email:currantUser?.email,
  //    age:'Test',
  //    gender:'Test',
  // });
 }

}


