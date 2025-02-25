import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { resultGuard } from './guards/result.guard';
import { ResultsComponent } from './components/results/results.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuard } from './guards/auth.guard';
import { quizGuard } from './guards/quiz.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginRegisterComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quiz/:myIndex',
    component: QuizComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'result',
        component: ResultsComponent,
        canActivate: [quizGuard],
      },
    ],
  },
];
