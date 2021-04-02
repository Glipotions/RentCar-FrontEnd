import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetails } from '../models/customerDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  apiUrl="https://localhost:44383/api/";
  constructor(private httpClient:HttpClient) {}
  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"Customers/getall"
     return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerDetails():Observable<ListResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"Customers/getcustomerdetails"
     return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);
  }

  getCustomerById(customerId:number):Observable<ListResponseModel<CustomerDetails>>{
    let newPath=this.apiUrl+"Customers/getbyid?id="+customerId
     return this.httpClient.get<ListResponseModel<CustomerDetails>>(newPath);
  }

  // getCustomerById(customerId: number): Observable<ListResponseModel<Customer>> {
  //   let newPath = this.apiUrl + 'customers/getcustomerdetailbycustomerid?customerId=' + customerId;
  //   return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  // }
}
