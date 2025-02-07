import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DeleteProductUseCaseService } from '../../application/use-cases/delete-product-use-case.service';
import { Product } from '../../domain/entities/product';
@Injectable({
  providedIn: 'root'
})
export class DeleteProductControllerService {

constructor(readonly useCase: DeleteProductUseCaseService) { }
  deleteProduct(id: number): Observable<boolean> {
      return this.useCase.execute(id).pipe(
        catchError(error => {
          return throwError(() => error);
        })
      );
    }
}
