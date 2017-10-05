import { Injectable } from '@angular/core';
import { Script } from './../../models/scriptModel';
import { SCRIPTLIST } from './../mockData/mock-scriptList';

@Injectable()
export class MockScriptsProfileHttpService {

  constructor() { }

  getScriptList(): Script[] {
    return SCRIPTLIST;
  }

}
