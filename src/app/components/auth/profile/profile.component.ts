import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../service/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../service/auth.service';
import { CustomerDetails } from 'src/app/models/customerDetails';

@Component({
   selector: 'app-profile',
   templateUrl: './profile.component.html',
   styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

   customer: CustomerDetails;
   customerUpdateForm: FormGroup;

   constructor(private localStorageService: LocalStorageService,
               private formBuilder: FormBuilder,
               private toastrService: ToastrService,
               private authService: AuthService) {
   }

   ngOnInit(): void {
      this.getCustomer();
      this.createCustomerUpdateForm();
   }

   getCustomer() {
      this.customer = this.localStorageService.getCurrentCustomer();
   }

   createCustomerUpdateForm() {
      this.customerUpdateForm = this.formBuilder.group({
         id: [this.customer.id, Validators.required],
         userId: [this.customer.userId, Validators.required],
         firstName: [this.customer.firstName, Validators.required],
         lastName: [this.customer.lastName, Validators.required],
         companyName: [this.customer.companyName],
         email: [this.customer.email, [Validators.required, Validators.email]],
         password: [''],
         confirmPassword: ['']
      });
   }

   update() {
      if (this.customerUpdateForm.invalid) {
         this.toastrService.warning('Bilgileri kontrol ediniz', 'Dikkat');
         return;
      }

      if (this.customerUpdateForm.value['password'] != this.customerUpdateForm.value['confirmPassword']) {
         this.toastrService.warning('Şifreler uyuşmuyor', 'Dikkat');
         return;
      }

      delete this.customerUpdateForm.value['confirmPassword'];
      let customer: CustomerDetails = Object.assign({}, this.customerUpdateForm.value);

      this.authService.update(customer).subscribe(responseSuccess => {
         this.localStorageService.removeCurrentCustomer();
         delete customer.password;
         this.localStorageService.setCurrentCustomer(customer);

         return this.toastrService.success(responseSuccess.message, 'Başarılı');
      }, responseError => {
         if (responseError.error.ValidationErrors) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return;
         }

         this.toastrService.error(
            responseError.error.StatusCode + ' ' + responseError.error.Message, responseError.name
         );
      });
   }

   getYear() {
      return new Date().getFullYear();
   }
}
