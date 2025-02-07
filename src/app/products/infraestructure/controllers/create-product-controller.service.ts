import { Injectable } from '@angular/core';
import { CreateProductUseCaseService } from '../../application/use-cases/create-product-use-case.service';
import {catchError, Observable, throwError } from 'rxjs';
import { Product } from '../../domain/entities/product';
@Injectable({
  providedIn: 'root'
})
export class CreateProductControllerService {

  constructor(readonly useCase: CreateProductUseCaseService) { }
  createProduct(product: Product): Observable<Product> {
    return this.useCase.execute(product).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
