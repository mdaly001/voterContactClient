import { Component, OnInit } from '@angular/core';
import { ScriptsProfileService } from './../../shared/services/scripts-profile.service';
import { Observable } from 'rxjs/Observable';
import { Script } from './../../shared/models/scriptModel';
import { ScriptFormComponent } from './../script-form/script-form.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-script-list',
  templateUrl: './script-list.component.html',
  styleUrls: ['./script-list.component.css']
})
export class ScriptListComponent implements OnInit {
  public displayedColumns = ['name', 'details', 'amountOfQuestions', 'createdBy', 'createdOn'];
  public dataSource: ExampleDataSource | null;


  constructor(private _scriptsProfileService: ScriptsProfileService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this._scriptsProfileService);
  }

  addScript(): void {
    const dialogRef = this.dialog.open(ScriptFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectScript(row) {
    const dialogRef = this.dialog.open(ScriptFormComponent, {
      data: { script: row }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _scriptsProfileService: ScriptsProfileService) {
    super( );
  }

  connect(): Observable<Script[]> {
    return this._scriptsProfileService._scriptList;
  }

  disconnect() { }
}
