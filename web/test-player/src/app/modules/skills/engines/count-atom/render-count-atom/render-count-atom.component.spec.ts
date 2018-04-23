import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCountAtomComponent } from './render-count-atom.component';

describe('RenderCountAtomComponent', () => {
  let component: RenderCountAtomComponent;
  let fixture: ComponentFixture<RenderCountAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCountAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCountAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
