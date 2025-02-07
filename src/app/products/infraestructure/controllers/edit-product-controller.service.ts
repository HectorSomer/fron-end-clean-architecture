import { Injectable } from '@angular/core';
import { Product } from '../../domain/entities/product';
import { Observable } from 'rxjs';
import { UpdateProductUseCaseService } from '../../application/use-cases/update-product-use-case.service';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditProductControllerService {

 constructor(readonly useCase: UpdateProductUseCaseService) { }
   editProduct(id: number, product: Product): Observable<Product> {
     return this.useCase.execute(id, product).pipe(
       catchError(error => {
         return throwError(() => error);
       })
     );
   }
}
