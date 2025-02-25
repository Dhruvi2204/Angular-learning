import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  router = inject(Router);

  onUserDashboard() {
    debugger;
    localStorage.setItem('role', 'user');
    this.router.navigateByUrl('user-dashboard');
  }
  onAdminDashboard() {
    localStorage.setItem('role', 'admin');
    this.router.navigateByUrl('admin-dashboard');
  }
}
