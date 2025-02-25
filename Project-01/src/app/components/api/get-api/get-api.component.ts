// free data from:https://jsonplaceholder.typicode.com/

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any = [];
  companyList: any = [];

  // ! To integrate api call, firstly create a constructor and in that constructor we need to create instance of http client
  constructor(private http: HttpClient) {}

  getUsers() {
    // http here is the instance of http client.
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
    //this.http.get('https://jsonplaceholder.typicode.com/users') gives us the data which we need to catch which is done with subscribe method.
  }

  getCompanies() {
    this.http
      .get('https://fake-json-api.mock.beeceptor.com/companies')
      .subscribe((result: any) => {
        this.companyList = result;
      });
  }
}
