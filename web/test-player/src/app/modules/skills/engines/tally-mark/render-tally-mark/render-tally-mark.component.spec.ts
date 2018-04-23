import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTallyMarkComponent } from './render-tally-mark.component';

describe('RenderTallyMarkComponent', () => {
  let component: RenderTallyMarkComponent;
  let fixture: ComponentFixture<RenderTallyMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderTallyMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTallyMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
