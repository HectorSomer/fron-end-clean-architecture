import { Injectable } from '@angular/core';
import { SellRepository } from '../../domain/repositories/sell-repository';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteSellUseCaseService {

   constructor(readonly sellRepository: SellRepository){}
    execute(id :number): Observable<boolean> {
      return this.sellRepository.deleteSell(id);
    }
}
