import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCountUpDownComponent } from './feedback-count-up-down.component';

describe('FeedbackCountUpDownComponent', () => {
  let component: FeedbackCountUpDownComponent;
  let fixture: ComponentFixture<FeedbackCountUpDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCountUpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCountUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
