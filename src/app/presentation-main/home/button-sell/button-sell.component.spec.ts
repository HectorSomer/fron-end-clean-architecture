import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSellComponent } from './button-sell.component';

describe('ButtonSellComponent', () => {
  let component: ButtonSellComponent;
  let fixture: ComponentFixture<ButtonSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
