import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'teams',
    loadComponent: () => import('./features/teams/teams.component')
  },
  {
    path: 'players/:teamId',
    loadComponent: () => import('./features/players/players.component')
  },
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  }
];
