import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTallyMarkComponent } from './feedback-tally-mark.component';

describe('FeedbackTallyMarkComponent', () => {
  let component: FeedbackTallyMarkComponent;
  let fixture: ComponentFixture<FeedbackTallyMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackTallyMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTallyMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
