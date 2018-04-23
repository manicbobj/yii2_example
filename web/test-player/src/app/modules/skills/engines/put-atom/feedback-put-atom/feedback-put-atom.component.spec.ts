import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPutAtomComponent } from './feedback-put-atom.component';

describe('FeedbackPutAtomComponent', () => {
  let component: FeedbackPutAtomComponent;
  let fixture: ComponentFixture<FeedbackPutAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackPutAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPutAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
