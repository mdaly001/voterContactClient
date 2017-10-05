import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScriptsComponent} from './scripts.component';
import {ScriptListComponent} from './script-list/script-list.component';
import { ScriptFormComponent} from './script-form/script-form.component';

const routes: Routes = [
  {path: '', component: ScriptsComponent,
    children: [
      {path: '', component: ScriptListComponent},
      {path: 'scriptForm', component: ScriptFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptsRoutingModule { }
