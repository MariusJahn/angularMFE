import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { SchichtenansichtComponent } from './feature/schichtenansicht/schichtenansicht.component';
import { MitarbeiteransichtComponent } from './feature/mitarbeiteransicht/components/mitarbeiteransicht.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MitarbeiteransichtComponent,
    SchichtenansichtComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
