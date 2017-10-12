import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  template: `
  <mat-toolbar>Phone Module</mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
