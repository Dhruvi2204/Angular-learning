import { Routes } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';

export const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        title: 'Child component A',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        title: 'Child component B',
        component: ChildBComponent,
      },
    ],
  },
  {
    path: 'second-component',
    title: 'Second component',
    component: SecondComponent,
  },
  {
    path: '',
    redirectTo: '/first-component',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
