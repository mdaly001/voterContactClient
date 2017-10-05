import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoterLookupComponent} from './voter-lookup.component';

const routes: Routes = [
  {path: '', component: VoterLookupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterLookupRoutingModule { }
