import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNumberLineComponent } from './feedback-number-line.component';

describe('FeedbackNumberLineComponent', () => {
  let component: FeedbackNumberLineComponent;
  let fixture: ComponentFixture<FeedbackNumberLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackNumberLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNumberLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
