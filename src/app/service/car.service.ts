import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car} from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44383/api/'
  constructor(private httpClient: HttpClient) {}
  
  getCars(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsById(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'Cars/getbyid?id='+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+'Cars/getallbybrandid?id='+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'Cars/getallbycolorid?id=' +colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarDetails(brandId:number,colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "Cars/getcardetailbrandandcolorid?brandId=+" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath); 
  }
  
  getCarDetailsById(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+ 'Cars/getcardetailsbyid?carId='+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
}
