import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellHeaderComponent } from './sell-header.component';

describe('SellHeaderComponent', () => {
  let component: SellHeaderComponent;
  let fixture: ComponentFixture<SellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
