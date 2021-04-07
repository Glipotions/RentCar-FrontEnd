import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../models/customerDetails';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44383/api/Auth/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
     let loginPath = this.apiUrl + 'login';
     return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
  }

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
     let registerPath = this.apiUrl + 'register';
     return this.httpClient.post<SingleResponseModel<TokenModel>>(registerPath, registerModel);
  }

  update(customer: CustomerDetails): Observable<SingleResponseModel<TokenModel>> {
     let updatePath = this.apiUrl + 'update';
     return this.httpClient.put<SingleResponseModel<TokenModel>>(updatePath, customer);
  }

  isAuthenticated(): boolean {
     return !!this.localStorageService.getToken();
  }
}
