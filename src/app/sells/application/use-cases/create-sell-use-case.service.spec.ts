import { TestBed } from '@angular/core/testing';
import { CreateSellUseCaseService } from './create-sell-use-case.service';

describe('CreateSellUseCaseService', () => {
  let service: CreateSellUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSellUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
