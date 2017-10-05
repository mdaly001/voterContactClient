import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterSearchComponent } from './voter-search.component';

describe('VoterSearchComponent', () => {
  let component: VoterSearchComponent;
  let fixture: ComponentFixture<VoterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
