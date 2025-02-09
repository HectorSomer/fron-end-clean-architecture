import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Sell } from '../../domain/entities/sell';
import { GetSellData } from '../data/sell-get-data';
import { SellMapper } from '../mappers/mappers';
import { SellDeleteData } from '../data/sell-delete-data';
import { SellUpdate } from '../../domain/entities/sell-update';
import { SellUpdateData } from '../data/sell-update-data';
import { SellRepository } from '../../domain/repositories/sell-repository';
@Injectable({
  providedIn: 'root'
})
export class ApiRepositorySellService implements SellRepository{

  private apiUrl = 'http://localhost:8080/v1/sells/';
  
    constructor(readonly http: HttpClient) {} 
  
    getAllSells(): Observable<Sell[]> {
      return this.http.get<{ data: GetSellData[] }>(this.apiUrl).pipe(
        map(response => response.data ? SellMapper.toSells(response.data) : []),
        catchError(error => throwError(() => error))
      );
    }
  
    createSell(sell: Sell): Observable<Sell> {
      return this.http.post<{ data: GetSellData }>(this.apiUrl, sell).pipe(
        map(response => {
          return SellMapper.toOnlyOneSell(response);
        }),  
        catchError(error => {
          return throwError(() => error);
        })
      );
  }
  
    deleteSell(id: number): Observable<boolean> {
      return this.http.delete<SellDeleteData>(`${this.apiUrl}${id}`).pipe(
        map(response => SellMapper.toBooleanStatus(response)),  
        catchError(error => throwError(() => error))
      );
    }
  
    updateSell(id: number, sell: SellUpdate): Observable<Sell> {
      return this.http.put<{data: SellUpdateData}>(`${this.apiUrl}${id}`, sell).pipe(
        map(response => SellMapper.updateToSell(response.data)),  
        catchError(error => throwError(() => error))
      );
    }
}
