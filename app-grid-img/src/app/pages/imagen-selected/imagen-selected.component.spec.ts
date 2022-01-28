import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenSelectedComponent } from './imagen-selected.component';

describe('ImagenSelectedComponent', () => {
  let component: ImagenSelectedComponent;
  let fixture: ComponentFixture<ImagenSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
