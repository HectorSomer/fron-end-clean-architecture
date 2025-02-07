import { TestBed } from '@angular/core/testing';

import { UpdateProductUseCaseService } from './update-product-use-case.service';

describe('UpdateProductUseCaseService', () => {
  let service: UpdateProductUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProductUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
