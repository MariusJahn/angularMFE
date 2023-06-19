import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MitarbeiteransichtComponent } from './mitarbeiteransicht/mitarbeiteransicht.component';
import { SchichtenansichtComponent } from './schichtenansicht/schichtenansicht.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: 'mitarbeiteransicht-component', component: MitarbeiteransichtComponent },
  { path: 'schichtenansicht-component', component: SchichtenansichtComponent },
  {
    path: 'mitarbeiter',
    loadComponent: () => import('mitarbeiter/AppComponent')
      .then(m => m.AppComponent)
  },
  {
    path: 'subheader',
    loadComponent: () => import('mitarbeiter/Subheader')
      .then(m => m.SubheaderComponent)
  },
  {
    path: 'module',
    loadChildren: () => import('mitarbeiter/Module')
      .then(m => m.AppModule)
  },
  {
    path: 'dynamic',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4400/remoteEntry.js',
        exposedModule: './Module'
      })
      .then(m => m.AppModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
