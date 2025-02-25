// import { quizGuard } from './../../../../my-quiz-master - Copy (3)/src/app/guards/quiz.guard';
// import { CanActivateFn } from '@angular/router';
// import { inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { QuizService } from '../services/quiz.service';

// export const quizGuard: CanActivateFn = (route, state) => {
//   // const router = inject(Router);
//   // const quizCompleted = sessionStorage.getItem('quizCompleted');

//   // if (state.url === '/quiz') {
//   //   return true;
//   // }

//   // if (quizCompleted === 'true' && state.url === '/result') {
//   //   alert('You cannot go back to the results page.');
//   //   router.navigate(['/categories']); // Redirect to Categories
//   //   return false;
//   // }

//   // return true;

//   constructor(private quizService: QuizService, private router: Router) { }

//     if (this.quizService.isQuizCompleted()) {
//       return true;
//     } else {
//       // If the quiz hasn’t been completed, send the user back to categories.
//       this.router.navigate(['/categories']);
//       return false;
//     }

// };

// quiz-completed.guard.ts
// quiz-completed.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Injectable({
  providedIn: 'root',
})
export class quizGuard implements CanActivate {
  constructor(private quizService: QuizService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.quizService.isQuizCompleted()) {
      return true;
    } else {
      // If the quiz wasn’t completed (or no results exist), redirect to categories.
      this.router.navigate(['/categories']);
      return false;
    }
  }
}
