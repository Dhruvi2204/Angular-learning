import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  router = inject(Router);

  onLogin() {
    if (
      this.userObj.get('username')?.value === 'admin' &&
      this.userObj.get('password')?.value == 2204
    ) {
      this.router.navigateByUrl('dashboard');
    } else {
      alert('Wrong credentials');
    }
  }
}
