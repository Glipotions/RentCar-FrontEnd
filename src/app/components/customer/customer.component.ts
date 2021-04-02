import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/models/customerDetails';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:CustomerDetails[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerService.getCustomerDetails().subscribe(response=>{
      this.customers=response.data;
    })
  }

}
