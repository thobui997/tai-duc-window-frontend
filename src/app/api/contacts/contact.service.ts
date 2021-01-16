import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getAllInformation(): Observable<Contact> {
    return this.httpClient.get<Contact>(`${environment.api_url}/contact`);
  }
}
