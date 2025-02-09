import { Injectable } from '@angular/core';
import { SellRepository } from '../../domain/repositories/sell-repository';
import { Sell } from '../../domain/entities/sell';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateSellUseCaseService {

   constructor(readonly sellRepository: SellRepository){}
      execute(sell: Sell): Observable<Sell> {
        return this.sellRepository.createSell(sell);
      }
}
