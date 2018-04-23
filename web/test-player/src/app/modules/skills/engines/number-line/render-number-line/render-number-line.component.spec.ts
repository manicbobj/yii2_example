import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderNumberLineComponent } from './render-number-line.component';

describe('RenderNumberLineComponent', () => {
  let component: RenderNumberLineComponent;
  let fixture: ComponentFixture<RenderNumberLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderNumberLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderNumberLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
