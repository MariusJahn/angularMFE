import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MitarbeiteransichtComponent } from './mitarbeiteransicht/mitarbeiteransicht.component';
import { SchichtenansichtComponent } from './schichtenansicht/schichtenansicht.component';

const routes: Routes = [
  { path: 'mitarbeiteransicht-component', component: MitarbeiteransichtComponent },
  { path: 'schichtenansicht-component', component: SchichtenansichtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
