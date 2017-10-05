import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'voterLookup', loadChildren: './voter-lookup/voter-lookup.module#VoterLookupModule'},
  {path: 'scripts', loadChildren: './scripts/scripts.module#ScriptsModule'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
