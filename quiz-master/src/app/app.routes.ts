import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultsComponent } from './components/results/results.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'quiz/:index',
    component: QuizComponent,
  },
  // {
  //   path: 'result',
  //   component: ResultsComponent,
  //   canActivate: [authGuard],
  // },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
];
