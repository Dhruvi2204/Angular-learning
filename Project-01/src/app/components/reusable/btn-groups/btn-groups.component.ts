import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-groups',
  imports: [NgClass],
  templateUrl: './btn-groups.component.html',
  styleUrl: './btn-groups.component.css',
})
export class BtnGroupsComponent implements OnInit {
  @Input() btnList: string[] = [];
  @Output() onBtnClicked = new EventEmitter<string>();
  currentBtn: string = '';

  ngOnInit():void {
    this.currentBtn = this.btnList[0];

  }
  btnClickedFun(btn: string) {
    this.currentBtn = btn;
    this.onBtnClicked.emit(btn);
  }
}
