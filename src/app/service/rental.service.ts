import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetails';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44383/api/Rentals";
  rentingCar: Rental;
  constructor(private httpClient:HttpClient) {}


  getRentals(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl);
 }

 getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + '/get-rental-by-carid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
 }

 setRentingCar(rental: Rental) {
    this.rentingCar = rental;
 }

 getRentingCar() {
    return this.rentingCar;
 }

 removeRentingCar() {
    this.rentingCar = null
 }

 add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl, rental);
 }




}

