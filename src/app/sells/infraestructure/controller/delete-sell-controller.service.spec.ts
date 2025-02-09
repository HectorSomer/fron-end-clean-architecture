import { TestBed } from '@angular/core/testing';
import { DeleteSellControllerService } from './delete-sell-controller.service';

describe('DeleteSellControllerService', () => {
  let service: DeleteSellControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSellControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
