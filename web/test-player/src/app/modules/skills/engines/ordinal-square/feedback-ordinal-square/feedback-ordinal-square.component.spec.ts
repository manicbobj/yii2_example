import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackOrdinalSquareComponent } from './feedback-ordinal-square.component';

describe('FeedbackOrdinalSquareComponent', () => {
  let component: FeedbackOrdinalSquareComponent;
  let fixture: ComponentFixture<FeedbackOrdinalSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackOrdinalSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackOrdinalSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
