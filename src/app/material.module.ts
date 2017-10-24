import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatExpansionModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModule { }
