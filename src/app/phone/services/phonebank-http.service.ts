import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Phonebank } from './../../shared/models/phonebankModel';
import { Question } from './../../shared/models/scriptModel';

@Injectable()
export class PhonebankHttpService {

  constructor(http: Http) { }

  getPhonebankList(): Phonebank[] {
    return;
  }

  getIds(question: Question): any[] {
    return;
  }

  getUniverseSize(phonebank: Phonebank): number {
    return;
  }

  getPassNumber(phonebank: Phonebank): number {
    return;
  }

  getPassProgression(phonebank: Phonebank, passNumber: number): any[] {
    return;
  }

  getTotalIds(phonebank: Phonebank): number {
    return;
  }

  addPhonebank(phonebank: Phonebank) {

  }

  getPhoneHouseHold(): any {
    return;
  }


}
