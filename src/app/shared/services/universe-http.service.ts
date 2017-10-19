import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Universe } from './../models/universeModel';

@Injectable()
export class UniverseHttpService {

  constructor(http: Http) { }

  getUniverseList(): Universe[] {
    return;
  }
}
