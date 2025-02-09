import { Injectable } from '@angular/core';
import { SellRepository } from '../../domain/repositories/sell-repository';
import { Sell } from '../../domain/entities/sell';
import { SellUpdate } from '../../domain/entities/sell-update';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditSellUseCaseService {

   constructor(readonly sellRepository: SellRepository) {}
    execute(id: number, sellUpdate: SellUpdate): Observable<Sell> {
      return this.sellRepository.updateSell(id, sellUpdate);
    }
}
