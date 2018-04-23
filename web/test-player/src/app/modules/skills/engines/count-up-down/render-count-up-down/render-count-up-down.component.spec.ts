import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCountUpDownComponent } from './render-count-up-down.component';

describe('RenderCountUpDownComponent', () => {
  let component: RenderCountUpDownComponent;
  let fixture: ComponentFixture<RenderCountUpDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCountUpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCountUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
