import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { Brand } from 'src/app/models/brand';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  dataLoaded = false;
  currentBrand : Brand = {id:-1,brandName:""};
  filterBrandText = "";
  constructor(private brandService:BrandService) { {
    
  }}


  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data;
        this.dataLoaded=true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  removeCurrentBrand(){
    this.filterBrandText = "";
    this.currentBrand = {id:-1,brandName:""};
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand)
    {return "list-group-item active"}
    else
    {return "list-group-item"}
  }

  getAllBrandClass(){
    let defaultBrand:Brand = {id:-1, brandName:""};
    if (this.currentBrand.id == defaultBrand.id) {
      return "list-group-item active cursorPointer"
    } else {
      return "list-group-item cursorPointer"
    }
  }

  setAllBrand(){
    return this.currentBrand={id:0, brandName:" "};
  }



}
