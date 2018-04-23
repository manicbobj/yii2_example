import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCountMoreOrLessComponent } from './feedback-count-more-or-less.component';

describe('FeedbackCountMoreOrLessComponent', () => {
  let component: FeedbackCountMoreOrLessComponent;
  let fixture: ComponentFixture<FeedbackCountMoreOrLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackCountMoreOrLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCountMoreOrLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
