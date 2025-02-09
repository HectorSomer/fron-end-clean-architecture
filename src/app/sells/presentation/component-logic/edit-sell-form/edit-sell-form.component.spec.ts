import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSellFormComponent } from './edit-sell-form.component';

describe('EditSellFormComponent', () => {
  let component: EditSellFormComponent;
  let fixture: ComponentFixture<EditSellFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSellFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
