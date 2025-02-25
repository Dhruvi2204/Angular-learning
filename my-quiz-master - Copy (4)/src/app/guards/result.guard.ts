import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsComponent } from '../components/results/results.component';

export const resultGuard: CanDeactivateFn<ResultsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const router = inject(Router);

  // Allow navigation if going to Quiz or Categories
  if (nextState?.url.startsWith('/quiz')) {
    sessionStorage.removeItem('quizCompleted'); // Reset quiz for replay
    return true;
  }
  if (nextState?.url.startsWith('/categories')) {
    return true;
  }

  //  Prevent going back to Quiz using browser back button
  alert('You cannot go back to the quiz.');
  return false;
};
