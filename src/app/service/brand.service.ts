import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
