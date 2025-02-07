import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { ProductUpdate } from '../entities/productUpdate';

export abstract class ProductRepository {
    abstract deleteProduct(id: number): Observable<boolean>;
    abstract getAllProducts(): Observable<Product[]>;
    abstract saveNewProduct(product: Product): Observable<Product>;
    abstract updateProduct(id: number, product: ProductUpdate): Observable<Product>;
  }