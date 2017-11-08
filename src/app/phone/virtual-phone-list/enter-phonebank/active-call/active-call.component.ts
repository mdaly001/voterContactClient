import { Component, OnChanges, Input } from '@angular/core';
import { Script, Question, Flag } from './../../../../shared/models/scriptModel';
import { Voter } from './../../../../shared/models/voterModel';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-active-call',
  templateUrl: './active-call.component.html',
  styleUrls: ['./active-call.component.css']
})
export class ActiveCallComponent implements OnChanges {
  @Input() phoneHouseHold: any;
  @Input() script: Script;
  phonebankForm: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnChanges() {
    this.createForm();
  }

  createForm(){
    this.phonebankForm = this._fb.group({
      voters: this._fb.group({
        voterId: '',
        questions: this._fb.group({
          questionId: '',
          responseId: ''
        })
      })
    })
  }

  onSubmit() {
    console.log(this.phonebankForm.value)
  }

}
