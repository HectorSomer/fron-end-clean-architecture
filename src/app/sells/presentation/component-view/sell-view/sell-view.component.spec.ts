import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellViewComponent } from './sell-view.component';

describe('SellViewComponent', () => {
  let component: SellViewComponent;
  let fixture: ComponentFixture<SellViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
