import { Injectable } from '@angular/core';
import { Script } from './../../shared/models/scriptModel';
import { SCRIPTLIST } from './../mockData/mock-scriptList';

@Injectable()
export class MockScriptsProfileHttpService {
  scriptList: Script[];

  constructor() {
    this.scriptList = SCRIPTLIST;
  }

  getScriptList(): Script[] {
    return this.scriptList;
  }

  addScript(script: Script) {
    this.scriptList.push(script);
  }

}
