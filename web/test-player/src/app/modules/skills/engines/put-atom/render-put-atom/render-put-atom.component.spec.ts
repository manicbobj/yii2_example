import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPutAtomComponent } from './render-put-atom.component';

describe('RenderPutAtomComponent', () => {
  let component: RenderPutAtomComponent;
  let fixture: ComponentFixture<RenderPutAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderPutAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPutAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
