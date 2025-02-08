import { TestBed } from '@angular/core/testing';

import { GetSellsUseCaseService } from './get-sells-use-case.service';

describe('GetSellsUseCaseService', () => {
  let service: GetSellsUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSellsUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
