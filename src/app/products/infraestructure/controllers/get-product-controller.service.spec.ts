import { TestBed } from '@angular/core/testing';
import { GetProductControllerService } from './get-product-controller.service';

describe('GetProductControllerService', () => {
  let service: GetProductControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
