import { TestBed } from '@angular/core/testing';
import { UpdateSellControllerService } from './update-sell-controller.service';


describe('UpdateSellControllerService', () => {
  let service: UpdateSellControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSellControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
