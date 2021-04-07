import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/models/customerDetails';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customers: CustomerDetails[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
