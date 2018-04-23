import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCountAtomComponent } from './feedback-count-atom.component';

describe('FeedbackCountAtomComponent', () => {
  let component: FeedbackCountAtomComponent;
  let fixture: ComponentFixture<FeedbackCountAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCountAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCountAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
