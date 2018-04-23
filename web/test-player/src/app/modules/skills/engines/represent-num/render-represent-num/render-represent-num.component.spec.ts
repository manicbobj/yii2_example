import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderRepresentNumComponent } from './render-represent-num.component';

describe('RenderRepresentNumComponent', () => {
  let component: RenderRepresentNumComponent;
  let fixture: ComponentFixture<RenderRepresentNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderRepresentNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderRepresentNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
