import { TestBed } from '@angular/core/testing';

import { CreateProductControllerService } from './create-product-controller.service';

describe('CreateProductControllerService', () => {
  let service: CreateProductControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProductControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
