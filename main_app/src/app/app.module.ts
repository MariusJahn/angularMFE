import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MitarbeiteransichtComponent } from './mitarbeiteransicht/mitarbeiteransicht.component';
import { SchichtenansichtComponent } from './schichtenansicht/schichtenansicht.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MitarbeiteransichtComponent,
    SchichtenansichtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
