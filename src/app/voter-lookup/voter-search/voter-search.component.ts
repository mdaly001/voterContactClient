import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VoterLookupService } from './../services/voter-lookup.service';

@Component({
  selector: 'app-voter-search',
  templateUrl: './voter-search.component.html',
  styles: [ ]
})
export class VoterSearchComponent implements OnInit {

  voterSearchForm: FormGroup;

  constructor(private _fb: FormBuilder, private _voterLookupService: VoterLookupService) {
    this.createForm();
  }

  ngOnInit() {
    this._voterLookupService.clearVoterList();
  }

  onSubmit() {
    this._voterLookupService.setVoterListByQuery(this.voterSearchForm.value);
    this.voterSearchForm.reset();
  }
  revert() {
    this.voterSearchForm.reset();
  }
  createForm() {
    this.voterSearchForm = this._fb.group({
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      county: '',
      voterId: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      party: ''
    });
  }

}
