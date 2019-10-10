import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxThreeComponent } from './nx-three.component';

describe('ThreeWrapperComponent', () => {
  let component: NxThreeComponent;
  let fixture: ComponentFixture<NxThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NxThreeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
