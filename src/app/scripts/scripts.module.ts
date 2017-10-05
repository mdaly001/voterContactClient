import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import {MaterialModule} from './../material.module';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsComponent } from './scripts.component';
import { ScriptListComponent } from './script-list/script-list.component';
import { ScriptsProfileService } from './services/scripts-profile.service';
import { MockScriptsProfileHttpService } from './mock/mockServices/mock-scripts-profile-http.service';
import { ScriptsProfileHttpService } from './services/scripts-profile-http.service';
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
export class ScriptsModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: ScriptsModule,
      providers: [
        ScriptsProfileService,
        {provide: ScriptsProfileHttpService, useClass: MockScriptsProfileHttpService}
      ]
    };
  }
 }
