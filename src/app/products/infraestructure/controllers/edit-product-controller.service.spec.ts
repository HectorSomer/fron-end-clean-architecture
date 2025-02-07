import { TestBed } from '@angular/core/testing';
import { EditProductControllerService } from './edit-product-controller.service';


describe('ProductControllerService', () => {
  let service: EditProductControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProductControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
