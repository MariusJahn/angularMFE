import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SchichtenComponent } from "./schichten.component";
import { SubheaderModule } from "../../subheader/subheader.module";

@NgModule({
  imports: [
    CommonModule,
    SubheaderModule,
  ],
  declarations: [
    SchichtenComponent,
  ]
})
export class SchichtenModule { }
