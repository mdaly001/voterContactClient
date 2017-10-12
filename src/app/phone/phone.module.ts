import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MaterialModule} from './../material.module';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import { VirtualPhoneListComponent } from './virtual-phone-list/virtual-phone-list.component';
import { PhonebankHttpService } from './services/phonebank-http.service';
import { PhonebankService } from './services/phonebank.service';
import { MockPhonebankHttpService } from './../mock/mockServices/mock-phonebank-http.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PhoneRoutingModule
  ],
  declarations: [PhoneComponent, VirtualPhoneListComponent]
})
export class PhoneModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: PhoneModule,
      providers: [
        PhonebankService,
        {provide: PhonebankHttpService, useClass: MockPhonebankHttpService}
       ]
    };
  }
 }
