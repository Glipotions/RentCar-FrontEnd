import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44383/api/Brands/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  
  getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'getbyid?id=' + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
 }

 add(brand: Brand): Observable<ResponseModel> {
  return this.httpClient.post<ResponseModel>(this.apiUrl, brand);
}

update(brand: Brand): Observable<ResponseModel> {
  return this.httpClient.put<ResponseModel>(this.apiUrl, brand);
}
}
