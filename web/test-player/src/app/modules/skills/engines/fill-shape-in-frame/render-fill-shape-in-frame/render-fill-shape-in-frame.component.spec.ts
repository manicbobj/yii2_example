import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderFillShapeInFrameComponent } from './render-fill-shape-in-frame.component';

describe('RenderFillShapeInFrameComponent', () => {
  let component: RenderFillShapeInFrameComponent;
  let fixture: ComponentFixture<RenderFillShapeInFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderFillShapeInFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderFillShapeInFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
