import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashhboard',
  imports: [],
  templateUrl: './admin-dashhboard.component.html',
  styleUrl: './admin-dashhboard.component.css',
})
export class AdminDashhboardComponent {
  constructor(private router: Router) {}
  onLogout() {
    this.router.navigateByUrl('landing');
    localStorage.removeItem('role');
  }
}
