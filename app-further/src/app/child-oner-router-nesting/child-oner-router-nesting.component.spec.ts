import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnerRouterNestingComponent } from './child-oner-router-nesting.component';

describe('ChildOnerRouterNestingComponent', () => {
  let component: ChildOnerRouterNestingComponent;
  let fixture: ComponentFixture<ChildOnerRouterNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOnerRouterNestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOnerRouterNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
