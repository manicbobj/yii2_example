import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderOrdinalSquareComponent } from './render-ordinal-square.component';

describe('RenderOrdinalSquareComponent', () => {
  let component: RenderOrdinalSquareComponent;
  let fixture: ComponentFixture<RenderOrdinalSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderOrdinalSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderOrdinalSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
