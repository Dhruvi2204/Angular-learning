import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const settingsRoutingGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  if (role === 'user') {
    return true;
  } else {
    router.navigateByUrl('landing');
    return false;
  }
};
