import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTableComponent } from './sell-table.component';

describe('SellTableComponent', () => {
  let component: SellTableComponent;
  let fixture: ComponentFixture<SellTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
