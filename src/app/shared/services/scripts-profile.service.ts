import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Script, Question } from './../../shared/models/scriptModel';
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

  setScript(script: Script) {
    this._script.next(script);
  }

  addScript(script: Script) {
    this._scriptsProfileHttpService.addScript(script);
    this._scriptList.next(this._scriptsProfileHttpService.getScriptList());
  }
}
