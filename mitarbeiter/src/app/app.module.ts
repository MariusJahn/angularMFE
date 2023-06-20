import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchichtenComponent } from './schichten/schichten.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ArbeitszeitenModule } from './arbeitszeiten/arbeitszeiten.module';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    SchichtenComponent,
  ],
  imports: [
    BrowserModule,
    ArbeitszeitenModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
