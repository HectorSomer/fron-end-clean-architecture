import { TestBed } from '@angular/core/testing';
import { DeleteProductUseCaseService } from './delete-product-use-case.service';


describe('DeleteProductUseCaseService', () => {
  let service: DeleteProductUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
