import { TestBed } from '@angular/core/testing';
import { EditSellUseCaseService } from './edit-sell-use-case.service';


describe('EditSellUseCaseService', () => {
  let service: EditSellUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditSellUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
