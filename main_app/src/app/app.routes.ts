import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { SchichtenansichtComponent } from './feature/schichtenansicht/schichtenansicht.component';
import { MitarbeiteransichtComponent } from './feature/mitarbeiteransicht/components/mitarbeiteransicht.component';


export const APP_ROUTES: Routes = [
  { path: 'mitarbeiteransicht-component', component: MitarbeiteransichtComponent },
  { path: 'schichtenansicht-component', component: SchichtenansichtComponent },
  {
    path: 'schichten',
    loadComponent: () => import('schichten/AppComponent')
      .then(m => m.AppComponent)
      .catch(err => console.log(err)),
  },
  /* {
    path: 'mitarbeiter',
    loadComponent: () => import('mitarbeiter/AppComponent')
      .then(m => m.AppComponent)
      .catch(err => console.log(err)),
  }, */
  {
    path: 'subheader',
    loadComponent: () => import('mitarbeiter/Subheader')
      .then(m => m.SubheaderComponent)
  },
  {
    path: 'mitarbeiter',
    loadChildren: () => import('mitarbeiter/AppModule')
      .then(m => m.AppModule),
  },
  {
    path: 'arbeitszeiten',
    loadChildren: () => import('mitarbeiter/ArbeitszeitenModule')
      .then(m => m.ArbeitszeitenModule),
  },
  {
    path: 'dynamic',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mitarbeiter',
        exposedModule: './Module'
      })
      .then(m => m.AppModule)
      .catch(err => console.log(err))
  },
];
