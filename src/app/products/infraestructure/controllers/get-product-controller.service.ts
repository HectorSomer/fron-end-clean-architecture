import { Injectable } from '@angular/core';
import { GetProductUseCaseService } from '../../application/use-cases/get-product-use-case.service';
import { Product } from '../../domain/entities/product';
import { tap, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductControllerService {

  constructor(readonly useCase: GetProductUseCaseService) { }
  getProducts(): Observable<Product[]> {
    return this.useCase.execute().pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
