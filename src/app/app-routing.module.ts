import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { CardComponent } from './components/card/card/card.component';

const routes: Routes = [
  // { path: 'rentals', component: RentalComponent },
  // { path: 'customers', component: CustomerComponent },
  // { path: 'cars', component: CarComponent },

  // { path: 'cars/filter/:brandId/:colorId', component: CarComponent },
  // { path: 'cars/rental/:id', component: RentalComponent },
  // { path: 'brands', component: BrandComponent },
  // { path: 'colors', component: ColorComponent },

  { path: 'rentals', component: RentalComponent },
  { path: 'customers', component: CustomerComponent },

  { path: 'cards', component: CardComponent },
  {
     path: 'cars', children: [
        { path: '', component: CarComponent },
        // { path: 'add', component: CarAddComponent },
        // { path: 'update/:carId', component: CarUpdateComponent },
        { path: 'filter/:brandId/:colorId', component: CarComponent },
        { path: 'brand/:brandId', component: CarComponent },
        { path: 'color/:colorId', component: CarComponent },
        { path: 'car-detail/:id', component: CarDetailsComponent },
     ]
  },
  {
     path: 'brands', children: [
        { path: '', component: BrandComponent },
        // { path: 'add', component: BrandAddComponent },
        // { path: 'update/:brandId', component: BrandUpdateComponent }
     ]
  },
  {
     path: 'colors', children: [
        { path: '', component: ColorComponent },
        // { path: 'add', component: ColorAddComponent },
        // { path: 'update/:colorId', component: ColorUpdateComponent }
     ]
  },
  {
     path: 'auth', children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'profile', component: ProfileComponent },
     ]
  },


  {path:"",pathMatch:"full",component:CarComponent },


  // {path:'pay',component:PaymentComponent},
//   { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
