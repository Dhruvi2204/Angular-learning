import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const quizGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const quizCompleted = sessionStorage.getItem('quizCompleted');

  if (state.url === '/quiz') {
    return true;
  }

  if (quizCompleted === 'true' && state.url === '/result') {
    alert('You cannot go back to the results page.');
    router.navigate(['/categories']); // Redirect to Categories
    return false;
  }

  return true;
};
