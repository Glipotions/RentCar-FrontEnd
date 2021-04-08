import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car} from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44383/api/Cars/'
  constructor(private httpClient: HttpClient) {}
  
  getCars(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsById(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'getbyid?id='+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+'getallbybrandid?id='+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'getallbycolorid?id=' +colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarDetails(brandId:number,colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "getcardetailbrandandcolorid?brandId=+" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath); 
  }
  
  getCarDetailsById(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'getcardetailsbyid?carId='+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl, car);
 }

 update(car: Car): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl, car);
 }
}

