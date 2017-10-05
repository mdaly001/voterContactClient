import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterLookupComponent } from './voter-lookup.component';

describe('VoterLookupComponent', () => {
  let component: VoterLookupComponent;
  let fixture: ComponentFixture<VoterLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
