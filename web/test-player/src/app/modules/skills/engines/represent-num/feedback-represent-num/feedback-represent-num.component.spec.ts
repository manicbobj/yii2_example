import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRepresentNumComponent } from './feedback-represent-num.component';

describe('FeedbackRepresentNumComponent', () => {
  let component: FeedbackRepresentNumComponent;
  let fixture: ComponentFixture<FeedbackRepresentNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackRepresentNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRepresentNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
