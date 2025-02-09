import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddSellComponent } from './button-add-sell.component';

describe('ButtonAddSellComponent', () => {
  let component: ButtonAddSellComponent;
  let fixture: ComponentFixture<ButtonAddSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAddSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
