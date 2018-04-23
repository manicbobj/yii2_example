import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFillShapeInFrameComponent } from './feedback-fill-shape-in-frame.component';

describe('FeedbackFillShapeInFrameComponent', () => {
  let component: FeedbackFillShapeInFrameComponent;
  let fixture: ComponentFixture<FeedbackFillShapeInFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFillShapeInFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFillShapeInFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
