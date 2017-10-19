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
  MatSelectModule
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
    MatSelectModule
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
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
