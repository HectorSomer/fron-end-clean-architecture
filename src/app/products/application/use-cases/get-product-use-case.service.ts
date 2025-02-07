import { Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/product_repository';
import { Product } from '../../domain/entities/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductUseCaseService {

  constructor(readonly productRepository: ProductRepository) {}
  execute(): Observable<Product[]> {
    return this.productRepository.getAllProducts();
  }
}
