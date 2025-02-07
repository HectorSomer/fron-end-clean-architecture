import { TestBed } from '@angular/core/testing';
import { CreateProductUseCaseService } from './create-product-use-case.service';


describe('CreateProductUseCaseService', () => {
  let service: CreateProductUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProductUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
