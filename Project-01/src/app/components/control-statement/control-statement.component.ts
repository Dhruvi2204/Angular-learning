import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  isVisible:boolean= true;
  showDiv(){
    this.isVisible= true
  }
  hideShowDiv(visibility: boolean){
    this.isVisible = visibility;
  }
  isChecked:boolean= true;
  dayName:string= '';
  cityList:string[]= [
    "Pune","Mumbai","Surat","Ahmedabad"
  ]
}
