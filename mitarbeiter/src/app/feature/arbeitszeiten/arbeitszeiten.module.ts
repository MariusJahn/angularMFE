import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArbeitszeitenComponent } from "./arbeitszeiten.component";
import { SubheaderModule } from "../../subheader/subheader.module";
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './actions/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
@NgModule({
  imports: [
    CommonModule,
    SubheaderModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [
    ArbeitszeitenComponent,
    MyCounterComponent,
  ]
})
export class ArbeitszeitenModule { }
