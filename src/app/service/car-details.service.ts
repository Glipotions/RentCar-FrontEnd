import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl='https://localhost:44383/api/'
  constructor(private httpClient:HttpClient) { }

  getCarDetailById(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+'Cars/getcardetailsbyid?carId='+carId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+'Cars/getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
}
