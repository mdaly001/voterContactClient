import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MaterialModule } from './../material.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import { VirtualPhoneListComponent } from './virtual-phone-list/virtual-phone-list.component';
import { PhonebankHttpService } from './services/phonebank-http.service';
import { PhonebankService } from './services/phonebank.service';
import { MockPhonebankHttpService } from './../mock/mockServices/mock-phonebank-http.service';
import { IdGraphComponent } from './virtual-phone-list/id-graph/id-graph.component';
import { PhonebankDetailComponent } from './virtual-phone-list/phonebank-detail/phonebank-detail.component';
import { PhonebankFormComponent } from './virtual-phone-list/phonebank-form/phonebank-form.component';
import { EnterPhonebankComponent } from './virtual-phone-list/enter-phonebank/enter-phonebank.component';
import { ActiveCallComponent } from './virtual-phone-list/enter-phonebank/active-call/active-call.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PhoneRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhoneComponent,
    VirtualPhoneListComponent,
    IdGraphComponent,
    PhonebankDetailComponent,
    PhonebankFormComponent,
    EnterPhonebankComponent,
    ActiveCallComponent
  ],
  entryComponents: [
    PhonebankFormComponent
  ]
})
export class PhoneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PhoneModule,
      providers: [
        PhonebankService,
        { provide: PhonebankHttpService, useClass: MockPhonebankHttpService }
      ]
    };
  }
}
