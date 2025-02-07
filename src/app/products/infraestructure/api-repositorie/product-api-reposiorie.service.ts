import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductRepository } from '../../domain/repositories/product_repository';
import { Product } from '../../domain/entities/product';
import { catchError, map } from 'rxjs/operators';
import { ProductGetData } from '../../domain/entities/data/product_get_data';
import { ProductMapper } from '../../application/mappers/mapper';
import { ProductDeleteData } from '../../domain/entities/data/product_delete_data';
import { ProductUpdateData } from '../../domain/entities/data/product_update_data';
import { ProductUpdate } from '../../domain/entities/productUpdate';

@Injectable({ providedIn: 'root' }) 
//en el pdf explico el por qué de esto, ya que inyectable, se supone es para ls clases
//que se inyectan, vaya, pues esta se inyecta en app.config, más no en otra parte
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
        console.error("Error en saveNewProduct:", error);
        return throwError(() => error);
      })
    );
}

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<ProductDeleteData>(`${this.apiUrl}/${id}`).pipe(
      map(response => ProductMapper.toBooleanStatus(response)),  
      catchError(error => throwError(() => error))
    );
  }

  updateProduct(id: number, product: ProductUpdate): Observable<Product> {
    return this.http.put<ProductUpdateData>(`${this.apiUrl}/${id}`, product).pipe(
      map(response => ProductMapper.updateToProduct(response)),  
      catchError(error => throwError(() => error))
    );
  }
}
