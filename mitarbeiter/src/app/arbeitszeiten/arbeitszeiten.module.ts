import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArbeitszeitenComponent } from "./arbeitszeiten.component";
import { ARBEITSZEITEN_ROUTES } from "./arbeitszeiten.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ARBEITSZEITEN_ROUTES),
  ],
  declarations: [
    ArbeitszeitenComponent
  ]
})
export class ArbeitszeitenModule { }
