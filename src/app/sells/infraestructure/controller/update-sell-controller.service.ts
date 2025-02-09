import { Injectable } from '@angular/core';
import { EditSellUseCaseService } from '../../application/use-cases/edit-sell-use-case.service';
import { Sell } from '../../domain/entities/sell';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateSellControllerService {

constructor(readonly useCase: EditSellUseCaseService) { }
   editSell(id: number, sell: Sell): Observable<Sell> {
     return this.useCase.execute(id, sell).pipe(
       catchError(error => {
         return throwError(() => error);
       })
     );
   }
}
