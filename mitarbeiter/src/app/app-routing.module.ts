import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchichtenComponent } from './schichten/schichten.component';
import { ArbeitszeitenComponent } from './arbeitszeiten/arbeitszeiten.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
