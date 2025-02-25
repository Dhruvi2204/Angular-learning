import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  // const router = inject(Router);
  const isSubmit = !!localStorage.getItem('submit');
  if (isSubmit) {
    debugger;
    return true;
  } else {
    debugger;

    return false;
  }
};
