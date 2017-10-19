import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Script } from './../../../shared/models/scriptModel';
import { ScriptsProfileService } from './../../../shared/services/scripts-profile.service';
import { Universe } from './../../../shared/models/universeModel';
import { UniverseService } from './../../../shared/services/universe.service';
import { PhonebankService } from './../../services/phonebank.service';

@Component({
  selector: 'app-phonebank-form',
  templateUrl: './phonebank-form.component.html',
  styleUrls: ['./phonebank-form.component.css']
})
export class PhonebankFormComponent {
  phonebankForm: FormGroup;
  scriptList: Script[];
  universeList: Universe[];

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<PhonebankFormComponent>,
    private _scriptsProfileService: ScriptsProfileService,
    private _universeService: UniverseService,
    private _phonebankService: PhonebankService) {
    this.createForm();
    this.scriptList = this._scriptsProfileService.getScriptList().value;
    this.universeList = this._universeService.getUniverseList().value;
  }

  createForm() {
    this.phonebankForm = this._fb.group({
      name: '',
      details: '',
      script: '',
      universe: '',
      creationDate: '',
      createdBy: ''
    });
  }

  onSubmit() {
    this._phonebankService.addPhonebank(this.phonebankForm.value);
    this.dialogRef.close();
  }

}
