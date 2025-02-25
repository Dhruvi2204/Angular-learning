import {
  DatePipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  NgFor,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
  I18nSelectPipe,
  I18nPluralPipe,
  DecimalPipe,
  AsyncPipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarComponent } from '../reusable/progress-bar/progress-bar.component';
import { BtnGroupsComponent } from '../reusable/btn-groups/btn-groups.component';
import { FormsModule } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
  selector: 'app-ng-for',
  imports: [
    NgFor,
    FormsModule,
    ProgressBarComponent,
    BtnGroupsComponent,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    JsonPipe,
    DatePipe,
    SlicePipe,
    PercentPipe,
    KeyValuePipe,
    I18nSelectPipe,
    I18nPluralPipe,
    DecimalPipe,
    AsyncPipe,
    NaPipe,
  ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  courseName: string = 'Angular19';
  studentObj: any = {
    name: 'John',
    age: 21,
    email: 'john.doe@gmail.com',
  };
  currentDate: Date = new Date();
  str: string = 'abcdefghi';
  pi: number = 3.14159;
  number1: number = 0.658;
  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  gender: string = 'male';
  inviteMap: any = {
    male: 'Invite him',
    female: 'Invite her',
    other: 'invite them',
  };

  // for I18nPluralPipe
  messages: string[] = [];
  msg: string = '';
  messageMapping: any = {
    '=0': '0 message',
    '=1': '1 message',
    other: '# messages',
    // # defines the number of messages
  };

  addMessage(msg: string) {
    this.messages.push(msg);
  }

  removeMsg() {
    this.messages.pop();
  }

  // The observer.next(value) method sends a value to all subscribers of the observable.
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  list: string[] = ['Basic', 'Medium', 'Advance'];
  currentBtn: string = '';
  onBtnChange(btnName: string) {
    console.log(btnName);
    this.currentBtn = btnName;
  }

  cityList: string[] = ['Pune', 'Mumbai', 'Surat', 'Jaipur', 'Ahmedabad'];

  empList: any[] = [
    {
      empId: 1,
      name: 'ABC',
      contact: 9001011221,
      city: '',
      attendance: 50,
    },
    {
      empId: 2,
      name: 'XYZ',
      contact: 9091190181,
      city: 'Surat',
      attendance: 80,
    },
    {
      empId: 3,
      name: '',
      contact: 8901729168,
      city: 'Ahmedabad',
      attendance: 30,
    },
    {
      empId: 4,
      name: 'DEF',
      contact: 7917289136,
      city: 'Nagpur',
      attendance: 100,
    },
    {
      empId: 5,
      name: 'GHI',
      contact: null,
      city: 'Jaipur',
      attendance: 75,
    },
  ];
}
