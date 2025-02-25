import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})

export class NgIfComponent {
  isVisible:boolean = false;
  hideDiv(){
    this.isVisible = false;
  }
  showDiv(){
    this.isVisible = true;
  }

  number1:number= 0;
  number2:number= 0;
}
