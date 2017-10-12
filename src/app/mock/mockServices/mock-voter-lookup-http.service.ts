import { Injectable } from '@angular/core';
import { VoterLookupHttpService } from './../../voter-lookup/services/voter-lookup-http.service';
import { Voter } from './../../shared/models/voterModel';
import { VOTERLIST} from './../mockData/mock-voterList';

@Injectable()
export class MockVoterLookupHttpService implements VoterLookupHttpService {

  constructor() { }

  getVoterListByQuery(voter: Voter): Voter[] {
    return VOTERLIST;
  }

}
