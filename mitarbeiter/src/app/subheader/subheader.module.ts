import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubheaderComponent } from "../subheader/subheader.component";
import { RouterModule } from "@angular/router";
import { MITARBEITER_ROUTES } from "../app.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MITARBEITER_ROUTES),
  ],
  declarations: [
    SubheaderComponent
  ],
  exports: [
    SubheaderComponent,
  ]
})
export class SubheaderModule { }
