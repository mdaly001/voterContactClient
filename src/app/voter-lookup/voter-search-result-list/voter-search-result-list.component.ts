import { Voter } from './../../shared/models/voterModel';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VoterLookupService } from './../services/voter-lookup.service';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { VoterProfileDialogComponent } from './../voter-profile-dialog/voter-profile-dialog.component';

@Component({
  selector: 'app-voter-search-result-list',
  templateUrl: './voter-search-result-list.component.html',
  styleUrls: ['./voter-search-result-list.component.css']
})
export class VoterSearchResultListComponent implements OnInit {
  public displayedColumns = ['name', 'age', 'party', 'address', 'city', 'county', 'state'];
  public dataSource: ExampleDataSource | null;

  constructor(private _router: Router,
    private _voterLookupService: VoterLookupService,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this._voterLookupService);
  }
  openDialog(row: Voter): void {
    const dialogRef = this.dialog.open(VoterProfileDialogComponent, {
      data: {voter: row}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

  handleRowClick(row) {
    this.openDialog(row);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _voterLookupService: VoterLookupService) {
    super();
  }
  connect(): Observable<Voter[]> {
    return this._voterLookupService._voterList;
  }

  disconnect() { }
}
