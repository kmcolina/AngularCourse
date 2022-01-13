import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFatherRouterNestingComponent } from './component-father-router-nesting.component';

describe('ComponentFatherRouterNestingComponent', () => {
  let component: ComponentFatherRouterNestingComponent;
  let fixture: ComponentFixture<ComponentFatherRouterNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFatherRouterNestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFatherRouterNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
