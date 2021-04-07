import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

//   rentals: Rental[]=[];
  rentDetails: RentalDetail[] = [];

  constructor(private rentalService: RentalService) {
  }

  ngOnInit(): void {
     this.getRentals();
  }

  getRentals() {
     this.rentalService.getRentals().subscribe((response) => {
        this.rentDetails = response.data;
     });
  }
}