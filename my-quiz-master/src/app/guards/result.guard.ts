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

  // If nextState is undefined (for example on a browser refresh),
  // allow the navigation to proceed.
  if (!nextState || !nextState.url) {
    return true;
  }

  // Allow navigation if going to Quiz or Categories.
  if (nextState.url.startsWith('/quiz')) {
    sessionStorage.removeItem('quizCompleted'); // Reset quiz for replay.
    return true;
  }
  if (nextState.url.startsWith('/categories')) {
    return true;
  }

  // Otherwise, prevent navigation (e.g. going back to the quiz using browser back button).
  alert('You cannot go back to the quiz.');
  return false;
};
