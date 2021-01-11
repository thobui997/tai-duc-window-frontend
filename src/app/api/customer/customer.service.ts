import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url = 'http://localhost:1337';
  constructor(private httpClient: HttpClient) {}

  postInformationCustomer(body: CustomerModel): Observable<CustomerModel[]> {
    return this.httpClient.post<CustomerModel[]>(`${this.url}/customers`, body);
  }
}
