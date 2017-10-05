import { Component } from '@angular/core';
import { ScriptsProfileService } from './../services/scripts-profile.service';
import { Observable } from 'rxjs/Observable';
import { Script } from './../models/scriptModel';
import { ScriptFormComponent } from './../script-form/script-form.component';
import {Router } from '@angular/router';

@Component({
  selector: 'app-script-list',
  templateUrl: './script-list.component.html',
  styleUrls: ['./script-list.component.css']
})
export class ScriptListComponent {

  scriptList: Observable<Script[]>;

  constructor(private _scriptsProfileService: ScriptsProfileService,
              private _router: Router) {
    this.scriptList = _scriptsProfileService.getScriptList();
  }

  addScript(): void {
    this._router.navigate(['scripts/scriptForm']);
   }
}
