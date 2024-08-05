import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {


  // div 1

  div1visiable: boolean = true;

  showdiv(){
    this.div1visiable = true
  }

  hidediv(){
    this.div1visiable = false
  }

  // div 2

  iswarningvisiable: boolean = true

  toggleDiv2() {
    this.iswarningvisiable =!this.iswarningvisiable

  }

  // div 4

  selectedStatus: string = ''
  

}
