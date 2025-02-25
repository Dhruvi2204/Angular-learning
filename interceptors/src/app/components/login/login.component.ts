import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);
  loginApiObj: any = {
    EmailId: '',
    Password: '',
  };
  //& This object properties are from post api : /api/UserApp/login

  onSubmit() {
    debugger;
    this.http
      .post('https://projectapi.gerasim.in/api/UserApp/login', this.loginApiObj)
      .subscribe(
        (res: any) => {
          debugger;
          localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('userToken', res.data.token);
          this.router.navigateByUrl('admin');
        },
        (error) => {
          alert('Wrong Credentials');
        }
      );
  }
}
