import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone.component';
import { VirtualPhoneListComponent } from './virtual-phone-list/virtual-phone-list.component'

const routes: Routes = [
  {path: '', component: PhoneComponent,
    children:[
      {path: '', component: VirtualPhoneListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }
