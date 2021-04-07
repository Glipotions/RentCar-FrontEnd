import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetails } from '../models/customerDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  apiUrl="https://localhost:44383/api/Customers/";
  constructor(private httpClient:HttpClient) {}

  getCustomers():Observable<ListResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getcustomerdetails"
     return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);
  }

  getCustomerDetails():Observable<ListResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getcustomerdetails"
     return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);
  }

  getCustomerById(customerId:number):Observable<ListResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"getbyid?id="+customerId
     return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);
  }

 getCustomerByEmail(email: string): Observable<SingleResponseModel<CustomerDetails>> {
    let emailPath = this.apiUrl + 'get-by-email?email=' + email;
    return this.httpClient.get<SingleResponseModel<CustomerDetails>>(emailPath);
 }

 update(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl, customer);
 }
}
