import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/service/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[] = [];
  dataLoaded=false;
  path="https://localhost:44383/CarImages/getall"
  constructor(private carImageService:CarImageService,
    private activatedRouted: ActivatedRoute) { {
    
  }}


  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if(params["id"])
      {
        this.getImagesById(params["id"])
      }
    })  
  }
  // getCarImages() {
  //   this.carImageService.getCarImages().subscribe(response=>{
  //     this.carImages=response.data
  //     this.dataLoaded=true;
  //   })



  getImagesById(id:number){
    this.carImageService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      
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