import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  imports: [NgClass],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent implements OnInit {
  @Input() tabList: string[] = [];
  @Output() tabClicked = new EventEmitter<string>();
  currentTab: string = '';
  ngOnInit(): void {
    this.currentTab = this.tabList[1];
  }

  onTabChange(tabName: string) {
    this.currentTab = tabName;
    this.tabClicked.emit(tabName);
  }
}
