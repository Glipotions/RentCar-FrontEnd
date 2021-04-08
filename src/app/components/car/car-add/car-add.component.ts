import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/service/brand.service';
import { CarService } from 'src/app/service/car.service';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];

  constructor(private formBuilder: FormBuilder,
              private brandService: BrandService,
              private colorService: ColorService,
              private toastrService: ToastrService,
              private carService: CarService) {
  }

  ngOnInit(): void {
     this.createCarAddForm();
     this.getBrands();
     this.getColors();
  }

  createCarAddForm() {
     this.carAddForm = this.formBuilder.group({
        brandId: ['', Validators.required],
        colorId: ['', Validators.required],
        carName: ['', Validators.required],
        modelYear: ['', Validators.required],
        dailyPrice: ['', Validators.required],
        description: ['', Validators.required],
        findexPoint: ['', Validators.required]
     });
  }

  getBrands() {
     this.brandService.getBrands().subscribe(responseSuccess => {
        this.brands = responseSuccess.data;
     }, responseError => {
        this.toastrService.error(responseError.message, responseError.name);
     });
  }

  getColors() {
     this.colorService.getColors().subscribe(responseSuccess => {
        this.colors = responseSuccess.data;
     }, responseError => {
        this.toastrService.error(responseError.message, responseError.name);
     });
  }

  add() {
     let car: Car = Object.assign({}, this.carAddForm.value);

     car.brandId = Number(car.brandId);
     car.colorId = Number(car.colorId);
     car.carName= String(car.carName);
     car.modelYear = Number(car.modelYear);
     car.dailyPrice = Number(car.dailyPrice);

     if (!this.carAddForm.valid) {
        this.toastrService.warning('Lütfen boş bilgi bırakmayın', 'Dikkat');
        return;
     }

     this.carService.add(car).subscribe(responseSuccess => {
        this.carAddForm.reset();
        this.carAddForm.get('brandId').setValue('');
        this.carAddForm.get('colorId').setValue('');

        return this.toastrService.success(responseSuccess.message, 'Başarılı');
     }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
           for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                 responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
              );
           }

           return;
        }

        console.log(responseError);
        this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
     });
  }
}
