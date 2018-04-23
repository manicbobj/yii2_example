import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderShapeInFrameComponent } from './render-shape-in-frame.component';

describe('RenderShapeInFrameComponent', () => {
  let component: RenderShapeInFrameComponent;
  let fixture: ComponentFixture<RenderShapeInFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderShapeInFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderShapeInFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
