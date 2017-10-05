import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Script, Question } from './../models/scriptModel';
import { ScriptsProfileHttpService } from './../services/scripts-profile-http.service';

@Injectable()
export class ScriptsProfileService {

  _scriptList: BehaviorSubject<Script[]> = new BehaviorSubject<Script[]>([]);
  _script: BehaviorSubject<Script> = new BehaviorSubject<Script>(null);

  constructor(private _scriptsProfileHttpService: ScriptsProfileHttpService) {
    this._scriptList.next(this._scriptsProfileHttpService.getScriptList());
   }

  getScriptList() {
    return this._scriptList;
  }

  getScript() {
    return this._script.value;
  }

  setScript(script) {
    this._script.next(script);
  }
}
