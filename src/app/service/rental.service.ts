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

  apiUrl="https://localhost:44383/api/";
  constructor(private httpClient:HttpClient) {}

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+"Rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
}

// Addrental(rental:RentalDetail):Observable<ResponseModel>{
//   let newPath = this.apiUrl+"Rentals/add";
//     return this.httpClient.post<ResponseModel>(newPath,rental);
// }
getRentalsByCarId(carId:number):Observable<ListResponseModel<RentalDetail>>
{
  let newPath=this.apiUrl+"Rentals/getallbycarid?id="+carId;
  return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
}

payRental(rental: Rental, amount: number) {
  let newPath = this.apiUrl + 'Rentals/add';
  return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:{rental}});
}

addRental(rental:Rental){
  let newPath = this.apiUrl + "Rentals/add"
  this.httpClient.post(newPath,rental).subscribe()
}
  
}

