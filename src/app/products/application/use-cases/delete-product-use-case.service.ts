import { Injectable } from '@angular/core';
import { ProductRepository } from '../../domain/repositories/product_repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCaseService {

  constructor(readonly productRepository: ProductRepository) { }
  deleteProductUseCase (id: number): boolean{
    return this.deleteProductUseCase(id);
  }
}
