import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from './contact.model';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private readonly shareContact$ = new BehaviorSubject<Contact>({
    email: '',
    phone: '',
    address: '',
    company: '',
    description: ''
  });

  constructor(private httpClient: HttpClient) {
  }

  getContact(): Observable<Contact> {
    return this.shareContact$.asObservable();
  }

  getAllInformation(): Observable<Contact> {
    return this.httpClient.get<Contact>(`${environment.api_url}/contact`).pipe(tap((data) => {
      this.shareContact$.next(data);
    }));
  }
}
