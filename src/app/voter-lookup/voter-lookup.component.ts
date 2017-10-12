import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-lookup',
  template: `
    <mat-toolbar>Voter Lookup</mat-toolbar>
    <app-voter-search></app-voter-search>
    <app-voter-search-result-list></app-voter-search-result-list>
  `,
  styles: [ ]
})
export class VoterLookupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
