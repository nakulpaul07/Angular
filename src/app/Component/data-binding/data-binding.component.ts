import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  
  // string number boolen data

  courseName: string = "Nakul";

  inputeType = "radio"

  rollNo: number = 1234;

  sateNAme: string = "Goa"

  isIndain: boolean = false

  currentData: Date = new Date()


  firstNAme = signal("NAkul Pal")

  // constructor(){
  //   this.inputeType = 
  // }

  changeCourseName(){
    this.courseName = "React Js"
    // this.firstNAme.set("Paul")

  }

  changeSignalName(){
    this.firstNAme.set("Paul")
  }

  


  showAlert(message: string) {
    alert(message)
  }

}
