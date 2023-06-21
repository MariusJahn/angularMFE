import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchichtenComponent } from './feature/schichten/schichten.component';
import { RouterModule } from '@angular/router';
import { MITARBEITER_ROUTES } from './app.routes';
import { SubheaderModule } from './subheader/subheader.module';
import { ArbeitszeitenModule } from './feature/arbeitszeiten/arbeitszeiten.module';
import { SchichtenModule } from './feature/schichten/schichten.module';
import { BrowserModule } from '@angular/platform-browser';
import { Person } from './feature/arbeitszeiten/models';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './actions/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    SubheaderModule,
    ArbeitszeitenModule,
    SchichtenModule,
    BrowserModule,
    RouterModule.forRoot(MITARBEITER_ROUTES),
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  person: Person = {
    name: '',
    alter: 0
  };
}
