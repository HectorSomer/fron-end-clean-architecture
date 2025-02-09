import { TestBed } from '@angular/core/testing';
import { CreateSellContollerService } from './create-sell-contoller.service';

describe('CreateSellContollerService', () => {
  let service: CreateSellContollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSellContollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
