import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductRepository } from '../../domain/repositories/product_repository';
import { Product } from '../../domain/entities/product';
import { catchError, map } from 'rxjs/operators';
import { ProductGetData } from '../data/product_get_data';
import { ProductMapper } from '../mappers/mapper';
import { ProductDeleteData } from '../data/product_delete_data';
import { ProductUpdateData } from '../data/product_update_data';
import { ProductUpdate } from '../../domain/entities/productUpdate';

@Injectable({ providedIn: 'root' }) 
export class ProductApiReposiorieService implements ProductRepository {
  private apiUrl = 'http://localhost:8080/v1/products/';

  constructor(readonly http: HttpClient) {} 

  getAllProducts(): Observable<Product[]> {
    return this.http.get<{ data: ProductGetData[] }>(this.apiUrl).pipe(
      map(response => response.data ? ProductMapper.toProducts(response.data) : []),
      catchError(error => throwError(() => error))
    );
  }

  saveNewProduct(product: Product): Observable<Product> {
    return this.http.post<{ data: ProductGetData }>(this.apiUrl, product).pipe(
      map(response => {
        return ProductMapper.toOnlyOneProduct(response);
      }),  
      catchError(error => {
        return throwError(() => error);
      })
    );
}

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<ProductDeleteData>(`${this.apiUrl}${id}`).pipe(
      map(response => ProductMapper.toBooleanStatus(response)),  
      catchError(error => throwError(() => error))
    );
  }

  updateProduct(id: number, product: ProductUpdate): Observable<Product> {
    return this.http.put<{data: ProductUpdateData}>(`${this.apiUrl}${id}`, product).pipe(
      map(response => ProductMapper.updateToProduct(response.data)),  
      catchError(error => throwError(() => error))
    );
  }
}
