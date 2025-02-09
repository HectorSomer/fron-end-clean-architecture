import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Sell } from '../../domain/entities/sell';
import { GetSellsUseCaseService } from '../../application/use-cases/get-sells-use-case.service';
@Injectable({
  providedIn: 'root'
})
export class GetSellControllerService {

  constructor(readonly useCase: GetSellsUseCaseService) { }
  getSells(): Observable<Sell[]> {
    return this.useCase.execute().pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
