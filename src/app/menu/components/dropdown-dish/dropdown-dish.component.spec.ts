import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDishComponent } from './dropdown-dish.component';

describe('DropdownDishComponent', () => {
  let component: DropdownDishComponent;
  let fixture: ComponentFixture<DropdownDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
