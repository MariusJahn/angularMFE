import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { SchichtenansichtComponent } from './feature/schichtenansicht/schichtenansicht.component';
import { MitarbeiteransichtComponent } from './feature/mitarbeiteransicht/components/mitarbeiteransicht.component';
import { StoreModule } from '@ngrx/store';

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
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
