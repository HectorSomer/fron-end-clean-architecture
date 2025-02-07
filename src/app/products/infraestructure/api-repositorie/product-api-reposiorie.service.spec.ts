import { TestBed } from '@angular/core/testing';
import { ProductApiReposiorieService } from './product-api-reposiorie.service';

describe('ProductApiReposiorieService', () => {
  let service: ProductApiReposiorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiReposiorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
