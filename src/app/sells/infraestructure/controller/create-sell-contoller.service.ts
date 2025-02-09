import { Injectable } from '@angular/core';
import { CreateSellUseCaseService } from '../../application/use-cases/create-sell-use-case.service';
import { Sell } from '../../domain/entities/sell';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateSellContollerService {
 constructor(readonly useCase: CreateSellUseCaseService) { }
  createSell(sell: Sell): Observable<Sell> {
    return this.useCase.execute(sell).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
