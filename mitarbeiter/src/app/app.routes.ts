import { Routes } from '@angular/router';
import { ArbeitszeitenComponent } from './arbeitszeiten/arbeitszeiten.component';
import { SchichtenComponent } from './schichten/schichten.component';

export const APP_ROUTES: Routes = [
  { path: '/schichten', component: SchichtenComponent},
  { path: '/arbeitszeiten', component: ArbeitszeitenComponent}
];
