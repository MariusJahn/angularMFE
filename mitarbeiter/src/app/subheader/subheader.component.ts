import { Component } from '@angular/core';
import { SchichtenComponent } from '../schichten/schichten.component';
import { ArbeitszeitenComponent } from '../arbeitszeiten/arbeitszeiten.component';

@Component({
  standalone: true,
  imports: [SchichtenComponent, ArbeitszeitenComponent],
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
})
export class SubheaderComponent {

}
