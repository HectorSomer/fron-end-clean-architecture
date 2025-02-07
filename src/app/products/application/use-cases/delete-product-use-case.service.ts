import { Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/product_repository';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCaseService {

  constructor(readonly productRepository: ProductRepository) { }
  execute(id: number): Observable<boolean>{
    return this.productRepository.deleteProduct(id);
  }
}
