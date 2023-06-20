import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchichtenComponent } from './schichten/schichten.component';
import { RouterModule } from '@angular/router';
import { MITARBEITER_ROUTES } from './app.routes';
import { SubheaderModule } from './subheader/subheader.module';
import { ArbeitszeitenModule } from './arbeitszeiten/arbeitszeiten.module';
import { SchichtenModule } from './schichten/schichten.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SubheaderModule,
    ArbeitszeitenModule,
    SchichtenModule,
    RouterModule.forChild(MITARBEITER_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
