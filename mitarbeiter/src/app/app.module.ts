import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchichtenComponent } from './schichten/schichten.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { RouterModule } from '@angular/router';
import { MITARBEITER_ROUTES } from './app.routes';
import { ArbeitszeitenModule } from './arbeitszeiten/arbeitszeiten.module';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    SchichtenComponent,
  ],
  imports: [
    ArbeitszeitenModule,
    RouterModule.forChild(MITARBEITER_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
