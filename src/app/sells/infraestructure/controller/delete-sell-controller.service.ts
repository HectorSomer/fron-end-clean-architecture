import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DeleteSellUseCaseService } from '../../application/use-cases/delete-sell-use-case.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteSellControllerService {

  constructor(readonly useCase: DeleteSellUseCaseService){}

  deleteSell(id: number): Observable<boolean> {
       return this.useCase.execute(id).pipe(
         catchError(error => {
           return throwError(() => error);
         })
       );
     }
}
