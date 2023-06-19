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
      .catch(err => console.log(err)),
  },
  {
    path: 'subheader',
    loadComponent: () => import('mitarbeiter/Subheader')
      .then(m => m.SubheaderComponent)
  },
  {
    path: 'module',
    loadChildren: () => import('mitarbeiter/Module')
      .then(m => m.AppModule),
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
