import { TestBed } from '@angular/core/testing';
import { ApiRepositorySellService } from './api-repository-sell.service';


describe('ApiRepositorySellService', () => {
  let service: ApiRepositorySellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRepositorySellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
