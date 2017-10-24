import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Phonebank } from './../../shared/models/phonebankModel';
import { PhonebankHttpService } from './phonebank-http.service';
import { Question } from './../../shared/models/scriptModel';

@Injectable()
export class PhonebankService {

  _phonebankList: BehaviorSubject<Phonebank[]> = new BehaviorSubject<Phonebank[]>([]);
  _phonebank: BehaviorSubject<Phonebank> = new BehaviorSubject<Phonebank>(null);

  constructor(private _phonebankHttpService: PhonebankHttpService) {
    this._phonebankList.next(this._phonebankHttpService.getPhonebankList());
  }

  getPhonebankList() {
    return this._phonebankList.value;
  }

  setPhonebank(phonebank: Phonebank) {
    this._phonebank.next(phonebank);
  }

  getPhonebank() {
    return this._phonebank.value;
  }

  getIds(question: Question): any[] {
    return this._phonebankHttpService.getIds(question);
  }

  getUniverseSize(phonebank: Phonebank): number {
    return this._phonebankHttpService.getUniverseSize(phonebank);
  }

  getPassNumber(phonebank: Phonebank): number {
    return this._phonebankHttpService.getPassNumber(phonebank);
  }

  getPassProgression(phonebank: Phonebank, passNumber: number): any[] {
    return this._phonebankHttpService.getPassProgression(phonebank, passNumber);
  }

  getTotalIds(phonebank: Phonebank): number {
    return this._phonebankHttpService.getTotalIds(phonebank);
  }

  addPhonebank(phonebank: Phonebank) {
    this._phonebankHttpService.addPhonebank(phonebank);
    this._phonebankList.next(this._phonebankHttpService.getPhonebankList());
  }

  getPhoneHouseHold() {
    return this._phonebankHttpService.getPhoneHouseHold();
  }

}
