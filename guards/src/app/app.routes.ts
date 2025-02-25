import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdminDashhboardComponent } from './components/admin-dashhboard/admin-dashhboard.component';
import { UserDashhboardComponent } from './components/user-dashhboard/user-dashhboard.component';
import { authGuard } from './guards/auth.guard';
import { settingsRoutingGuard } from './guards/settings-routing.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashhboardComponent,
    canActivate: [authGuard],
  },

  {
    path: 'user-dashboard',
    component: UserDashhboardComponent,
    canActivate: [authGuard],
    canActivateChild: [settingsRoutingGuard],
    children: [
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
