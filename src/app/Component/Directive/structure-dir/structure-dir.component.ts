import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structure-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structure-dir.component.html',
  styleUrl: './structure-dir.component.css'
})
export class StructureDirComponent {

  isDiv1Visiable: boolean = true

  showDiv1(){
    this.isDiv1Visiable = true
  }

  HideDiv1(){
    this.isDiv1Visiable = false
  }

  isDiv2Visiable: boolean = true

  toggleDiv2(){
    this.isDiv2Visiable = !this.isDiv2Visiable
  }



  num1: string = ''
  num2: string = ''


  cityArray: string [] = ["Gwalior","Jabalpur","Indor","Betul"]

  studentList: any[] = [
    {studID:12, name:"nakul" , city:"Gwalior", isActive:true},
    {studID:15, name:"Arun" , city:"Jabalpur", isActive:true},
    {studID:73, name:"vikas" , city:"Indor", isActive:false},
    {studID:58, name:"manish" , city:"Betul", isActive:true},
    {studID:96, name:"bot" , city:"Delhi", isActive:false}

  ]
  


}
