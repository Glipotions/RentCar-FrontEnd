import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { RentalDetail } from 'src/app/models/rentalDetails';
import { CarDetailsService } from 'src/app/service/car-details.service';
import { CarImageService } from 'src/app/service/car-image.service';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carImages: CarImage[] = [];
  cars: CarDetails;
  dataLoaded = false;
  carDetails:CarDetails;
  rentalsByCarId:RentalDetail[];
  rentals:RentalDetail[];
  // apiUrl : string = "https://localhost:44383";
  
  constructor( private carDetailService:CarDetailsService,
    private carImagesService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsById(params["id"])
        this.getImagesById(params["id"])
        // this.getRentalsByCarId(params["id"])
        
      }
      this.getRentals()
  })
  }
  getCarsById(id:number){
    this.carDetailService.getCarDetailById(id).subscribe(response=>{
      this.carDetails=response.data[0];
    })
  }
  getImagesById(id:number){
    this.carImagesService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data;
    })
  }

  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}

