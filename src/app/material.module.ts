import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MatDatepickerModule,
  MdNativeDateModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatExpansionModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
