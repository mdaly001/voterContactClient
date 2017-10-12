import { Component, OnInit } from '@angular/core';
import { PhonebankService } from './../services/phonebank.service';
import { Phonebank } from './../../shared/models/phonebankModel';

@Component({
  selector: 'app-virtual-phone-list',
  templateUrl: './virtual-phone-list.component.html',
  styleUrls: ['./virtual-phone-list.component.css']
})
export class VirtualPhoneListComponent implements OnInit {
  phonebankList: Phonebank[];

  constructor(private _phonebankService: PhonebankService) {
    this.phonebankList = this._phonebankService.getPhonebankList();
   }

  ngOnInit() {
  }

}

