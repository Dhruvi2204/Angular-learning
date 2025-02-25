import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);

  const selectedRole = localStorage.getItem('role');
  if (selectedRole === 'user') {
    debugger;
    return true;
  } else if (selectedRole == 'admin') {
    debugger;
    return true;
  } else {
    router.navigateByUrl('landing');
    return false;
  }
};
