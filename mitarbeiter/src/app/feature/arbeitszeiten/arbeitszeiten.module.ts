import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArbeitszeitenComponent } from "./arbeitszeiten.component";
import { SubheaderModule } from "../../subheader/subheader.module";
@NgModule({
  imports: [
    CommonModule,
    SubheaderModule,

  ],
  declarations: [
    ArbeitszeitenComponent,
  ]
})
export class ArbeitszeitenModule { }
