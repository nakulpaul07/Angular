import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  // Hold Data Of API

  userList: any [] = []

  TenderList: any [] = []



  constructor(private http: HttpClient){

  }

  getAllUser(){
    // debugger
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      // debugger
      this.userList = res
    })
  }

  getAllTender(){
    // debugger
    this.http.get("http://localhost:5000/api/getallTender").subscribe((res:any)=>{
      // debugger
      this.TenderList = res.data
    })
  }


}



