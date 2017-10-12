import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import {MaterialModule} from './../material.module';

import { VoterLookupRoutingModule } from './voter-lookup-routing.module';
import { VoterLookupComponent } from './voter-lookup.component';
import { VoterSearchComponent } from './voter-search/voter-search.component';
import { VoterSearchResultListComponent } from './voter-search-result-list/voter-search-result-list.component';
import { VoterLookupService } from './services/voter-lookup.service';
import { VoterLookupHttpService} from './services/voter-lookup-http.service';
import { MockVoterLookupHttpService } from './../mock/mockServices/mock-voter-lookup-http.service';
import { VoterProfileDialogComponent } from './voter-profile-dialog/voter-profile-dialog.component';




@NgModule({
  imports: [
    CommonModule,
    VoterLookupRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    VoterLookupComponent,
    VoterSearchComponent,
    VoterSearchResultListComponent,
    VoterProfileDialogComponent
  ],
  entryComponents: [
    VoterProfileDialogComponent
  ]
})
export class VoterLookupModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VoterLookupModule,
      providers: [
        VoterLookupService,
        {provide: VoterLookupHttpService, useClass: MockVoterLookupHttpService}
      ]
    };
  }
}
