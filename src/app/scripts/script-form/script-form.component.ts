import { Component, Inject } from '@angular/core';
import { Script, Question, Flag } from './../../shared/models/scriptModel';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScriptsProfileService } from './../../shared/services/scripts-profile.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-script-form',
  templateUrl: './script-form.component.html',
  styleUrls: ['./script-form.component.css']
})
export class ScriptFormComponent {
  scriptForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _scriptsProfileService: ScriptsProfileService,
    public dialogRef: MatDialogRef<ScriptFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createForm();
  }

  createForm() {
    this.scriptForm = this._fb.group({
      scriptName: '',
      scriptDetails: '',
      scriptQuestions: this._fb.array([
        this.initScriptQuestions()
      ]),
      creationDate: '',
      createdBy: ' '
    });
    if (this.data) {
      this.patchForm(this.data.script);
    }
  }

  patchForm(script: Script) {
    this.scriptForm.patchValue({
      scriptName: script.scriptName,
      scriptDetails: script.scriptDetails,
      creationDate: script.creationDate,
      createdBy: script.createdBy
    });
    this.removeQuestion(0);
    this.patchScriptQuestions(script.scriptQuestions);
  }

  patchScriptQuestions(questions: Question[]) {
    for (let i = 0; i < questions.length; i++) {
      this.scriptQuestions.push(this.initScriptQuestions(questions[i]));
      const responseFlags = this.scriptForm.get('scriptQuestions.' + i).get('responseFlags') as FormArray;
      for (let j = 0; j < questions[i].responseFlags.length; j++) {
        responseFlags.push(this.initFlag(questions[i].responseFlags[j]));
      }
    }
  }

  initScriptQuestions(question?: Question) {
    if (question) {
      return this._fb.group({
        question: question.question,
        responseFlags: this._fb.array([])
      });
    } else {
      return this._fb.group({
        question: ' ',
        responseFlags: this._fb.array([
          this.initFlag()
        ])
      });
    }
  }

  initFlag(flag?: Flag) {
    if (flag) {
      return this._fb.group({
        name: flag.name,
        nameAbbrev: flag.nameAbbrev
      });
    } else {
      return this._fb.group({
        name: ' ',
        nameAbbrev: ' '
      });
    }
  }

  addResponseFlag(idx: number) {
    const responseFlags = this.scriptForm.get('scriptQuestions.' + idx).get('responseFlags') as FormArray;
    responseFlags.push(this.initFlag());
  }

  removeResponseFlag(idxOfQuestion: number, idxOfFlag: number) {
    const responseFlags = this.scriptForm.get('scriptQuestions.' + idxOfQuestion).get('responseFlags') as FormArray;
    responseFlags.removeAt(idxOfFlag);
  }

  get scriptQuestions(): FormArray {
    return this.scriptForm.get('scriptQuestions') as FormArray;
  }

  addQuestion() {
    this.scriptQuestions.push(this.initScriptQuestions());
  }

  removeQuestion(idx: number) {
    const questions = this.scriptForm.get('scriptQuestions') as FormArray;
    questions.removeAt(idx);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this._scriptsProfileService.addScript(this.scriptForm.value);
    this.dialogRef.close();
  }
}
