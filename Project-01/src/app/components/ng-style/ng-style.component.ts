import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divBgColor:string= "green "
  onBtnClick(color: string){
    this.divBgColor= color;
  }
  isChecked:boolean = false;

  myCSS:any={
    'background-color': 'red',
    'color': 'white',
    'height':'100px',
    'width':'100px',
  }
}
