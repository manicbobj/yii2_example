import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCountMoreOrLessComponent } from './render-count-more-or-less.component';

describe('RenderCountMoreOrLessComponent', () => {
  let component: RenderCountMoreOrLessComponent;
  let fixture: ComponentFixture<RenderCountMoreOrLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCountMoreOrLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCountMoreOrLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
