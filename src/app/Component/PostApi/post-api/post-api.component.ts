import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe ],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {


  TenderObj: any = {
    "tender_Id":"",
    "name":"",
    "description":"",
    "start_time":"",
    "end_time":"",
    "buffer_time":""
    
}

 http = inject(HttpClient)

 ngOnInit(): void {
  this.getTender()
   
 }

 onEdit(data: any) {
  this.TenderObj = data
 }

onSave(){

  this.http.post("http://localhost:5000/api/inserttender",this.TenderObj).subscribe((res:any)=>{
   alert("Tender Add Successfully")
    this.getTender()

  })

}

  onUpdate(){

  this.http.post("http://localhost:5000/api/updateTender/${_id}",this.TenderObj).subscribe((res:any)=>{
    alert("Tender Update Successfully")
     this.getTender()
 
   })

}

// get APi

TenderList: any[]=[]

getTender(){
  this.http.get("http://localhost:5000/api/getallTender").subscribe((res:any)=>{
    this.TenderList = res.data
  })
}




}
