import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Voter } from './../../shared/models/voterModel';


@Injectable()
export class VoterLookupHttpService {

  constructor(http: Http) { }

  // return list of voters that fit the voter object recieved
  getVoterListByQuery(voter: Voter): Voter[] {
    return;
  }


}
