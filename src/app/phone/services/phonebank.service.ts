import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Phonebank } from './../../shared/models/phonebankModel';
import { PhonebankHttpService } from './phonebank-http.service';

@Injectable()
export class PhonebankService {

  _phonebankList: BehaviorSubject<Phonebank[]> = new BehaviorSubject<Phonebank[]>([]);

  constructor(private _phonebankHttpService: PhonebankHttpService) {
    this._phonebankList.next(this._phonebankHttpService.getPhonebankList());
  }

  getPhonebankList() {
    return this._phonebankList.value;
  }
}
