import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedInfo = sessionStorage.getItem('loggedInUser');
  if (loggedInfo) {
    return true;
  } else {
    alert('Please login to access this page.');
    router.navigate(['/login']);
    return false;
  }
};

export const authChildGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  const loggedInRole = sessionStorage.getItem('loggedInUser');
  if (loggedInRole === 'admin') {
    return true;
  } else {
    alert('Only admin can access this page');
    return false;
  }
};
