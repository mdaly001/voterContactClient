import { Component, Input, OnChanges } from '@angular/core';
import { PhonebankService } from './../../services/phonebank.service';
import { Phonebank } from './../../../shared/models/phonebankModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebank-detail',
  templateUrl: './phonebank-detail.component.html',
  styleUrls: ['./phonebank-detail.component.css']
})
export class PhonebankDetailComponent implements OnChanges {
  @Input() phonebank;
  universeSize: number;
  passNumber: number;
  totalIds: number;
  labels = ['called', 'not called'];
  data: any[] = [28, 300];
  chartType = 'doughnut';

  constructor(private _phonebankService: PhonebankService,
              private _router: Router) { }

  ngOnChanges() {
    this.universeSize = this._phonebankService.getUniverseSize(this.phonebank);
    this.passNumber = this._phonebankService.getPassNumber(this.phonebank);
    this.data = this._phonebankService.getPassProgression(this.phonebank, this.passNumber);
    this.totalIds = this._phonebankService.getTotalIds(this.phonebank);
  }

  enterPhonebank(phonebank: Phonebank) {
    this._phonebankService.setPhonebank(phonebank);
    this._router.navigate(['phone/enterPhonebank']);
  }

}
