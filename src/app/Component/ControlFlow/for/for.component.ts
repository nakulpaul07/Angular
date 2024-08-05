import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cityArray: string[] = ['pune','gwalior','goa','himachal']


  studentList: any[] = [
    {studID:12, name:"nakul" , city:"Gwalior", isActive:true},
    {studID:15, name:"Arun" , city:"Jabalpur", isActive:true},
    {studID:73, name:"vikas" , city:"Indor", isActive:false},
    {studID:58, name:"manish" , city:"Betul", isActive:true},
    {studID:96, name:"bot" , city:"Delhi", isActive:false}

  ]
  

  dayNumber: string = ''


}
