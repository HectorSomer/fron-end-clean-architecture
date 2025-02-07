import { Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/product_repository';
import { Product } from '../../domain/entities/product';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductUseCaseService {

  constructor(readonly productRepository: ProductRepository) { 

  }

  execute(id: number, product: Product){
    return this.productRepository.updateProduct(id, product);
  }
}
