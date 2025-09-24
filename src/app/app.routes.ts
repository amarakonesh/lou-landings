import { Routes } from '@angular/router';
import { MobileShowcaseComponent } from './pages/landings/mobile-showcase/mobile-showcase.component';

export const routes: Routes = [
  { path: '', component: MobileShowcaseComponent }, // 👈 Page d’accueil
  {
    path: 'landings',
    loadChildren: () =>
      import('./pages/landings/landings.route').then(
        (mod) => mod.LANDING_ROUTES
      ),
  },
  { path: '**', redirectTo: '' }, // 👈 Redirection si route inconnue
];

