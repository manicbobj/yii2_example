import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTestPage } from './skilltest.page';

describe('SkillTestPage', () => {
  let component: SkillTestPage;
  let fixture: ComponentFixture<SkillTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTestPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
