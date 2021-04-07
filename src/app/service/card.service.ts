import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  private apiUrl = 'https://localhost:44383/api/Cards/';

  constructor(private httpClient: HttpClient) {
  }

  add(card: Card): Observable<ResponseModel> {
     return this.httpClient.post<ResponseModel>(this.apiUrl, card);
  }

  getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
     let getByCustomerPath = this.apiUrl + 'get-by-customerId?customerId=' + customerId;
     return this.httpClient.get<ListResponseModel<Card>>(getByCustomerPath);
  }
}
