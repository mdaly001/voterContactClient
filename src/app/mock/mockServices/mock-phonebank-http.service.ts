import { Injectable } from '@angular/core';
import { Phonebank } from './../../shared/models/phonebankModel';
import { PHONEBANKLIST } from './../mockData/mock-phonebankList';

@Injectable()
export class MockPhonebankHttpService {
  phonebankList: Phonebank[];

  constructor() {
    this.phonebankList = PHONEBANKLIST;
  }

  getPhonebankList(): Phonebank[] {
    return this.phonebankList;
  }

}
