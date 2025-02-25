import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashhboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-dashhboard.component.html',
  styleUrl: './user-dashhboard.component.css',
})
export class UserDashhboardComponent {
  constructor(private router: Router) {}
  onLogout() {
    this.router.navigateByUrl('landing');
    localStorage.removeItem('role');
  }
}
