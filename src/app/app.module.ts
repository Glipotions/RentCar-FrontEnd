import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';

import {ToastrModule} from 'ngx-toastr';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CardComponent } from './components/card/card/card.component';
import { CardSavedComponent } from './components/card/card/card-saved/card-saved/card-saved.component';
import { AuthMenuComponent } from './components/navi/auth-menu/auth-menu.component';
import { CarRentComponent } from './components/car/car-rent/car-rent.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarImageComponent,
    CustomerComponent,
    RentalComponent,
    UserComponent,
    NaviComponent,
    CarDetailsComponent,
    CarFilterComponent,
    FilterBrandPipe,
    FilterColorPipe,
    LoginComponent,
    CardComponent,
    CardSavedComponent,
    AuthMenuComponent,
    RegisterComponent,
    ProfileComponent,
    CarRentComponent,
    CardSavedComponent,
    BrandAddComponent,
    CarAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    DatePipe,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    // { provide: HTTP_INTERCEPTORS, useClass: ExpirationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
