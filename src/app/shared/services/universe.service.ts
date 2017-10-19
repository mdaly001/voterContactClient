import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UniverseHttpService } from './universe-http.service';
import { Universe } from './../models/universeModel';

@Injectable()
export class UniverseService {

  _universeList: BehaviorSubject<Universe[]> = new BehaviorSubject<Universe[]>([]);

  constructor(private _universeHttpService: UniverseHttpService) {
    this._universeList.next(this._universeHttpService.getUniverseList());
  }

  getUniverseList() {
    return this._universeList;
  }

}
