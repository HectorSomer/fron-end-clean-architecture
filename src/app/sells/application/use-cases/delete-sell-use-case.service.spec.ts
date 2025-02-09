import { TestBed } from '@angular/core/testing';
import { DeleteSellControllerService } from '../../infraestructure/controller/delete-sell-controller.service';

describe('DeleteSellUseCaseService', () => {
  let service: DeleteSellControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSellControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
