import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderMoreOrLessComponent } from './render-more-or-less.component';

describe('RenderMoreOrLessComponent', () => {
  let component: RenderMoreOrLessComponent;
  let fixture: ComponentFixture<RenderMoreOrLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderMoreOrLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderMoreOrLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
