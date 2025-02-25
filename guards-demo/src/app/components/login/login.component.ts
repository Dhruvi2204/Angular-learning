import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  router = inject(Router);
  username!: string;
  userpassword!: string;
  onSignIn() {
    if (
      (this.username === 'admin' && this.userpassword === 'password') ||
      (this.username === 'user' && this.userpassword === 'password')
    ) {
      sessionStorage.setItem('loggedInUser', this.username);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Enter valid credentials');
    }
  }
}
