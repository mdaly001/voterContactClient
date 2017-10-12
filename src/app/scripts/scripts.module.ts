import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import {MaterialModule} from './../material.module';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsComponent } from './scripts.component';
import { ScriptListComponent } from './script-list/script-list.component';
import { ScriptFormComponent } from './script-form/script-form.component';

@NgModule({
  imports: [
    CommonModule,
    ScriptsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ScriptsComponent,
    ScriptListComponent,
    ScriptFormComponent
  ],
  entryComponents: [
    ScriptFormComponent
  ]
})
export class ScriptsModule { }
