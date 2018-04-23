import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderNumAtomComponent } from './render-num-atom.component';

describe('RenderNumAtomComponent', () => {
  let component: RenderNumAtomComponent;
  let fixture: ComponentFixture<RenderNumAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderNumAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderNumAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
