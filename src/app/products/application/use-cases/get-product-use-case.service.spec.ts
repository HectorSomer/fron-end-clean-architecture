import { TestBed } from '@angular/core/testing';
import { GetProductUseCaseService } from './get-product-use-case.service';

describe('GetProductUseCaseService', () => {
  let service: GetProductUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
