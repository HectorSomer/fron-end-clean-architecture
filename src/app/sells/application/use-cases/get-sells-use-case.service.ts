import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellRepository } from '../../domain/repositories/sell-repository';
import { Sell } from '../../domain/entities/sell';
@Injectable({
  providedIn: 'root'
})
export class GetSellsUseCaseService {

  constructor(readonly sellRepository: SellRepository) {}
  execute(): Observable<Sell[]> {
    return this.sellRepository.getAllSells();
  }
}
