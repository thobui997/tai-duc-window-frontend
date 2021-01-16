import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from './customer.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  postInformationCustomer(body: CustomerModel): Observable<CustomerModel[]> {
    return this.httpClient.post<CustomerModel[]>(
      `${environment.api_url}/customers`,
      body
    );
  }
}
