import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private http: HttpClient) {
    debugger;
    this.getAllUsers();
  }
  getAllUsers() {
    debugger;
    this.http
      .get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers')
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
