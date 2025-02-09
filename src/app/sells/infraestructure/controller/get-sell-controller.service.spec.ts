import { TestBed } from '@angular/core/testing';
import { GetSellControllerService } from './get-sell-controller.service';
describe('GetSellControllerService', () => {
  let service: GetSellControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSellControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
