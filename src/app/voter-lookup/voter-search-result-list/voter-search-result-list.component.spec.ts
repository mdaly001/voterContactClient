import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterSearchResultListComponent } from './voter-search-result-list.component';

describe('VoterSearchResultListComponent', () => {
  let component: VoterSearchResultListComponent;
  let fixture: ComponentFixture<VoterSearchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterSearchResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
