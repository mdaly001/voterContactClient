import { Component } from '@angular/core';
import { PhonebankService } from './../services/phonebank.service';
import { Phonebank } from './../../shared/models/phonebankModel';
import { MatDialog } from '@angular/material';
import { PhonebankFormComponent } from './phonebank-form/phonebank-form.component';

@Component({
  selector: 'app-virtual-phone-list',
  template: `
    <div>
      <app-phonebank-detail  *ngFor="let phonebank of phonebankList" [phonebank]="phonebank"></app-phonebank-detail>
      <button mat-fab color="accent" class="custom-button" aria-label="Add a phonebank" (click)="addPhonebank()">
      <mat-icon>add</mat-icon>
      </button>
    </div>
  `,
  styles: [`
  .custom-button{
    position: absolute;
    top: 15px;
    right: 12px;
    }
  `]
})
export class VirtualPhoneListComponent {
  phonebankList: Phonebank[];


  constructor(private _phonebankService: PhonebankService,
    public dialog: MatDialog) {
    this.phonebankList = this._phonebankService.getPhonebankList();
  }

  addPhonebank() {
    const dialogRef = this.dialog.open(PhonebankFormComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

}

