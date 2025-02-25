import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the username from sessionStorage (set during login)
    this.username = sessionStorage.getItem('loggedInUser');
  }

  logout(): void {
    // Clear session storage and navigate back to login
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
  onIconClick(){
    this.router.navigate(['/categories']);
  }
}
