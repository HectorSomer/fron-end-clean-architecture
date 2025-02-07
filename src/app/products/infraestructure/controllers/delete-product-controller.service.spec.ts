import { TestBed } from '@angular/core/testing';
import { DeleteProductControllerService } from './delete-product-controller.service';


describe('DeleteProductControllerService', () => {
  let service: DeleteProductControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
