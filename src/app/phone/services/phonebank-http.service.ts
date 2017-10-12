import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Phonebank } from './../../shared/models/phonebankModel';

@Injectable()
export class PhonebankHttpService {

  constructor(http: Http) { }

  getPhonebankList(): Phonebank[] {
    return;
  }

}
