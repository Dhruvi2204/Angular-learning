import { Routes, CanDeactivateFn } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { resultGuard } from './guards/result.guard';
import { quizGuard } from './guards/quiz.guard';
import { ResultsComponent } from './components/results/results.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  // { path: 'login', component: LoginRegisterComponent },
  // Protect categories route with the AuthGuard
  {
    path: 'categories',
    component: CategoriesComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'quiz/:myIndex',
    component: QuizComponent,
    // canActivate: [quizGuard],
  },
  {
    path: 'result',
    component: ResultsComponent,
    // canDeactivate: [resultGuard],
  },
];
