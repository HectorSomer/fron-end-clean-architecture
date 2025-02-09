import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormSellComponent } from './add-form-sell.component';

describe('AddFormSellComponent', () => {
  let component: AddFormSellComponent;
  let fixture: ComponentFixture<AddFormSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFormSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
