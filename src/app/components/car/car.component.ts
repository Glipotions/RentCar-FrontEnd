import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetails[]=[];
  // car:Car[]=[];
  dataLoaded = false;

  constructor(
    private carService:CarService, 
    private activatedRoot:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params=>{
      if (params["brandId"] && params["colorId"]) {
        this.getCarDetails(params["brandId"],params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"])
      {
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
    
  }

  getCars() {
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data;
        this.dataLoaded = true;
      });
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded = true;
    });
}

  getCarsByColor(colorId:number) {
  this.carService.getCarsByColorId(colorId).subscribe(response=>{
    this.cars=response.data;
    this.dataLoaded = true;
  });
}

getCarDetails(brandId:number, colorId:number){
  this.carService.getCarDetails(brandId, colorId).subscribe(response => {
    this.cars = response.data;
    this.dataLoaded = true;
  })
}

}
