import { Observable } from 'rxjs';
import { Sell } from '../entities/sell';
import { SellUpdate } from '../entities/sell-update';
export abstract class SellRepository {
    abstract deleteSell(id: number): Observable<boolean>;
    abstract getAllSells(): Observable<Sell[]>;
    abstract createSell(sell: Sell): Observable<Sell>;
    abstract updateSell(id: number, sell: SellUpdate): Observable<Sell>;
  }