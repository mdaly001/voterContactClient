import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone.component';
import { VirtualPhoneListComponent } from './virtual-phone-list/virtual-phone-list.component';
import { EnterPhonebankComponent } from './virtual-phone-list/enter-phonebank/enter-phonebank.component';

const routes: Routes = [
  {
    path: '', component: PhoneComponent,
    children: [
      { path: '', component: VirtualPhoneListComponent },
      { path: 'enterPhonebank', component: EnterPhonebankComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }
