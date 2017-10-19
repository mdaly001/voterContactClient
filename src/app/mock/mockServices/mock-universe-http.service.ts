import { Injectable } from '@angular/core';
import { Universe } from './../../shared/models/universeModel';
import { UNIVERSELIST } from './../mockData/mock-universeList';

@Injectable()
export class MockUniverseHttpService {

  constructor() { }

  getUniverseList(): Universe[] {
    return UNIVERSELIST;
  }
}
