import { Component, Input, OnChanges } from '@angular/core';
import { Script, Question, Flag } from './../models/scriptModel';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-script-form',
  templateUrl: './script-form.component.html',
  styleUrls: ['./script-form.component.css']
})
export class ScriptFormComponent implements OnChanges {
  @Input() script: Script;

  scriptForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.createForm();
    // this.addResponseFlag();
  }

  createForm() {
    this.scriptForm = this._fb.group({
      scriptName: '',
      scriptDetails: '',
      scriptQuestions: this._fb.array([
        this.initScriptQuestions()
      ]),
      creationDate: '',
      createdBy: ''
    });
  }

  initScriptQuestions() {
    return this._fb.group({
      question: '',
      responseFlags: this._fb.array([
        this.initResponseFlags()
      ])
    });
  }

  initResponseFlags() {
    return this._fb.group({
      name: ' ',
      nameAbbrev: ' '
    });
  }

  initFlag() {
    return this._fb.group({
      name: ' ',
      nameAbbrev: ' '
    });
  }

  ngOnChanges() {
    // this.scriptForm.reset({
    //   scriptName: this.script.scriptName,
    //   scriptDetails: this.script.scriptDetails,
    //   creationDate: this.script.creationDate,
    //   createdBy: this.script.createdBy
    // });
    // this.setQuestions(this.script.scriptQuestions);
    // this.setResponseFlags(this.script.scriptQuestions.responseFlags);
  }

  // get responseFlags(): FormArray {
  //   return this.scriptForm.get('responseFlags') as FormArray;
  // }

  // setResponseFlags(flags: Flag[]) {
  //   const flagFGs = flags.map(flag => this._fb.group(flag));
  //   const flagFormArray = this._fb.array(flagFGs);
  //   this.scriptForm.setControl('responseFlags', flagFormArray);
  // }

  addResponseFlag(idx: number) {
    const responseFlags = this.scriptForm.get('scriptQuestions.' + idx).get('responseFlags') as FormArray;
    responseFlags.push(this.initFlag());
  }

  get scriptQuestions(): FormArray {
    return this.scriptForm.get('scriptQuestions') as FormArray;
  }

  // setQuestions(questions: Question[]) {
  //   const questionFGs = questions.map(question => this._fb.group(question));
  //   const questionFormArray = this._fb.array(questionFGs);
  //   this.scriptForm.setControl('scriptQuestions', questionFormArray);
  // }

  addQuestion() {
    this.scriptQuestions.push(this.initScriptQuestions());
  }

  onSubmit() {
    console.log(this.scriptForm.value);
  }
}
