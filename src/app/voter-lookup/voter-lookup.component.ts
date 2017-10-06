import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-lookup',
  template: `
    <md-toolbar color='accent'>Voter Lookup</md-toolbar>
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
