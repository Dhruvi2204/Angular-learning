// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = sessionStorage.getItem('loggedInUser');
    if (!isLoggedIn) {
      alert('You must be logged in to access this page!');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
