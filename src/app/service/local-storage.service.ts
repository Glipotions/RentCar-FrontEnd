import { Injectable } from '@angular/core';
import { CustomerDetails } from '../models/customerDetails';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tokenKey: string = 'token';
  currentCustomer: string = 'currentCustomer';

  constructor() {
  }

  setToken(tokenValue: TokenModel) {
     localStorage.setItem(this.tokenKey, JSON.stringify(tokenValue));
  }

  getToken(): TokenModel {
     return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  removeToken() {
     localStorage.removeItem(this.tokenKey);
  }

  setCurrentCustomer(currentCustomerValue: CustomerDetails) {
     localStorage.setItem(this.currentCustomer, JSON.stringify(currentCustomerValue));
  }

  getCurrentCustomer(): CustomerDetails {
     return JSON.parse(localStorage.getItem(this.currentCustomer));
  }

  removeCurrentCustomer() {
     localStorage.removeItem(this.currentCustomer);
  }
}

