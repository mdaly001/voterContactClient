import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-voter-profile-dialog',
  templateUrl: './voter-profile-dialog.component.html',
  styleUrls: ['./voter-profile-dialog.component.css']
})
export class VoterProfileDialogComponent {

  constructor(public dialogRef: MdDialogRef<VoterProfileDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  closeDialog() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
