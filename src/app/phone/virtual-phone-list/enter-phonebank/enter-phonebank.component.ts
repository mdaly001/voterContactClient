import { Component, OnInit } from '@angular/core';
import { PhonebankService } from './../../services/phonebank.service';
import { Phonebank } from './../../../shared/models/phonebankModel';
import { environment } from './../../../../environments/environment';
import { Script } from './../../../shared/models/scriptModel';

@Component({
  selector: 'app-enter-phonebank',
  templateUrl: './enter-phonebank.component.html',
  styleUrls: ['./enter-phonebank.component.css']
})
export class EnterPhonebankComponent implements OnInit {
  phonebank: Phonebank;
  script: Script;
  phoneHouseHold: any;
  callCounter: number;
  callStartTime: number;
  avgMinCounter: number;
  chartData: any[];
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public labels: string[] = ['YES', 'UND', 'NO', 'REF'];
  public chartType = 'bar';
  public chartLegend = false;

  constructor(private _phonebankService: PhonebankService) {
    this.phonebank = this._phonebankService.getPhonebank();
    this.phoneHouseHold = this._phonebankService.getPhoneHouseHold();
    this.script = this.phonebank.script;
  }

  ngOnInit() {
    this.callCounter = 0;
    this.callStartTime = Math.floor(Date.now() / 1000);
    // for developement purposes
    if (!environment.production) {
      this.chartData = [
        { data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], label: 'IDs' }
      ];
    }
  }

}
