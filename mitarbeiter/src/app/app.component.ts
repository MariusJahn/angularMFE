import { Component } from '@angular/core';
import { SubheaderComponent } from './subheader/subheader.component';
import { AppRoutingModule } from './app-routing.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SubheaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mitarbeiter';
}
