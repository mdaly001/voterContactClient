import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

// Lazy Loaded Modules
import { VoterLookupModule } from './voter-lookup/voter-lookup.module';
import { ScriptsModule } from './scripts/scripts.module';
import { PhoneModule } from './phone/phone.module';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

// Providers
import { DatePipe } from '@angular/common';
import { ScriptsProfileService } from './shared/services/scripts-profile.service';
import { ScriptsProfileHttpService } from './shared/services/scripts-profile-http.service';

// Mock Services
import { MockScriptsProfileHttpService } from './mock/mockServices/mock-scripts-profile-http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    VoterLookupModule.forRoot(),
    PhoneModule.forRoot()
  ],
  providers: [
    DatePipe,
    ScriptsProfileService,
    {provide: ScriptsProfileHttpService, useClass: MockScriptsProfileHttpService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
