import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatCardModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [CommonModule, MatButtonModule, MatCardModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class CustomMaterialModule { }