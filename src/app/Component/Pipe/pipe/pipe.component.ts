import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [TitleCasePipe,UpperCasePipe,LowerCasePipe,DatePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "this is a demo"

  currentData: Date = new Date()

  student: any = {
    name: "chetan",
    city: "Gwalior",
    empId:"24"


  }

}
