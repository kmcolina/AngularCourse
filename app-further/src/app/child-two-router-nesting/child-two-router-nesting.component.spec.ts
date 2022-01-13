import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoRouterNestingComponent } from './child-two-router-nesting.component';

describe('ChildTwoRouterNestingComponent', () => {
  let component: ChildTwoRouterNestingComponent;
  let fixture: ComponentFixture<ChildTwoRouterNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoRouterNestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoRouterNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
