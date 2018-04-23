import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackShapeInFrameComponent } from './feedback-shape-in-frame.component';

describe('FeedbackShapeInFrameComponent', () => {
  let component: FeedbackShapeInFrameComponent;
  let fixture: ComponentFixture<FeedbackShapeInFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackShapeInFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackShapeInFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
