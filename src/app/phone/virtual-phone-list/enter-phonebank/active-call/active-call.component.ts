import { Component, OnChanges, Input } from '@angular/core';
import { Script } from './../../../../shared/models/scriptModel';

@Component({
  selector: 'app-active-call',
  templateUrl: './active-call.component.html',
  styleUrls: ['./active-call.component.css']
})
export class ActiveCallComponent implements OnChanges{
  @Input() phoneHouseHold: any;
  @Input() script: Script;

  constructor() { }

  ngOnChanges() {
  }

}
