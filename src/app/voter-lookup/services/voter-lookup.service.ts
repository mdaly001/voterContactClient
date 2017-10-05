import { Injectable } from '@angular/core';
import { Voter } from './../../shared/models/voterModel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { VoterLookupHttpService } from './voter-lookup-http.service';

@Injectable()
export class VoterLookupService {

  _voterList: BehaviorSubject<Voter[]> = new BehaviorSubject<Voter[]>([]);

  constructor(private _voterLookupHttpService: VoterLookupHttpService) { }

  setVoterListByQuery(voter: Voter): void {
    this._voterList.next(this._voterLookupHttpService.getVoterListByQuery(voter));
  }

  getVoterList(): Voter[] {
    return this._voterList.value;
  }

  clearVoterList() {
    this._voterList.next(null);
  }

}
