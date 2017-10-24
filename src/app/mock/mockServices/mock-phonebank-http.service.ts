import { Injectable } from '@angular/core';
import { Phonebank } from './../../shared/models/phonebankModel';
import { PHONEBANKLIST } from './../mockData/mock-phonebankList';
import { Question } from './../../shared/models/scriptModel';
import { VOTERLIST } from './../mockData/mock-voterList';
import { Voter } from './../../shared/models/voterModel';

@Injectable()
export class MockPhonebankHttpService {
  phonebankList: Phonebank[];

  constructor() {
    this.phonebankList = PHONEBANKLIST;
  }

  getPhonebankList(): Phonebank[] {
    return this.phonebankList;
  }

  getIds(question: Question): any[] {
    const data: any[] = [
      { data: [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)], label: 'IDs' }
    ];
    return data;
  }

  getUniverseSize(phonebank: Phonebank): number {
    return Math.floor(Math.random() * 1000);
  }

  getPassNumber(phonebank: Phonebank): number {
    return Math.floor(Math.random() * 3 + 1);
  }

  getPassProgression(phonebank: Phonebank, passNumber: number): any[] {
    const data: any[] = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
    return data;
  }

  getTotalIds(phonebank: Phonebank): number {
    return Math.floor(Math.random() * 1000);
  }

  addPhonebank(phonebank: Phonebank) {
    this.phonebankList.push(phonebank);
  }

  getPhoneHouseHold(): any {
    const voters: Voter[] = [VOTERLIST[0], VOTERLIST[1]];

    return voters;
  }

}
