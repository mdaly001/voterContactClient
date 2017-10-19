import { Component, Input, OnChanges } from '@angular/core';
import { Question } from './../../../shared/models/scriptModel';
import { PhonebankService } from './../../services/phonebank.service';

@Component({
  selector: 'app-id-graph',
  templateUrl: './id-graph.component.html',
  styleUrls: ['./id-graph.component.css']
})
export class IdGraphComponent implements OnChanges {
  @Input() question: Question;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['YES', 'UND', 'NO'];
  public barChartType = 'bar';
  public barChartLegend = false;

  data: any[];

  constructor(private _phonebankService: PhonebankService) {
  }

  ngOnChanges() {
    this.data = this._phonebankService.getIds(this.question);
  }


}
