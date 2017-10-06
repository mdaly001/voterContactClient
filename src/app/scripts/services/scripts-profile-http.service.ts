import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Script } from './../../shared/models/scriptModel';

@Injectable()
export class ScriptsProfileHttpService {

  constructor(http: Http) { }

  getScriptList(): Script[] {
    return;
  }

  addScript(script: Script) {
    return;
  }

}
