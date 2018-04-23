import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackMoreOrLessComponent } from './feedback-more-or-less.component';

describe('FeedbackMoreOrLessComponent', () => {
  let component: FeedbackMoreOrLessComponent;
  let fixture: ComponentFixture<FeedbackMoreOrLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackMoreOrLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackMoreOrLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
