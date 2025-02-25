import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService, UserCredentials } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  // Toggle between login and register forms
  isLoginTab = true;

  // Login form variables
  loginUsername = '';
  loginPassword = '';

  // Register form variables
  registerUsername = '';
  registerPassword = '';
  registerConfirmPassword = '';

  constructor(private userService: UserService, private router: Router) {}

  toggleTab(isLogin: boolean) {
    this.isLoginTab = isLogin;
  }

  // Login method
  login() {
    // Retrieve the list of users and check if the credentials match
    this.userService.getUsers().subscribe(
      (users) => {
        const user = users.find(
          (u) =>
            u.username === this.loginUsername &&
            u.password === this.loginPassword
        );
        if (user) {
          // For simplicity, we store a flag in sessionStorage.
          sessionStorage.setItem('loggedInUser', user.username);
          // Navigate to the categories page (or your protected route)
          this.router.navigate(['/categories']);
        } else {
          alert('Invalid credentials!');
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  // Registration method
  register() {
    if (this.registerPassword !== this.registerConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // First, check if user already exists
    this.userService.getUsers().subscribe(
      (users) => {
        if (users.find((u) => u.username === this.registerUsername)) {
          alert('User already exists!');
          return;
        }
        const newUser: User = {
          username: this.registerUsername,
          password: this.registerPassword,
        };
        // Register (POST) the new user to JSON Server
        this.userService.registerUser(newUser).subscribe(
          (res) => {
            alert('Registration successful! Please log in.');
            // Clear registration fields if desired
            this.registerUsername = '';
            this.registerPassword = '';
            this.registerConfirmPassword = '';
            // Switch to login tab
            this.toggleTab(true);
          },
          (error) => {
            console.error('Error during registration:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
