import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = 'http://localhost:1337';
  constructor(private httpClient: HttpClient) {}

  getAllInformation(): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.url}/contact`);
  }
}
