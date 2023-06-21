import { Routes } from '@angular/router';
import { ArbeitszeitenComponent } from './feature/arbeitszeiten/arbeitszeiten.component';
import { SchichtenComponent } from './feature/schichten/schichten.component';
import { AppComponent } from './app.component';

export const MITARBEITER_ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'arbeitszeiten', component: ArbeitszeitenComponent},
  { path: 'schichten', component: SchichtenComponent},
];
