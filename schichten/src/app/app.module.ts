import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { person } from './models/person';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
