import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisories } from './advisories.model';

@Injectable({
  providedIn: 'root',
})
export class AdvisoriesService {
  url = 'http://localhost:1337';
  constructor(private httpClient: HttpClient) {}

  getAllAdvisories(currentUrl: string): Observable<Advisories[]> {
    switch (currentUrl) {
      case '/advisory/kien-thuc':
        return this.httpClient.get<Advisories[]>(`${this.url}/knowledges`);
      case '/advisory/tin-cong-trinh':
        return this.httpClient.get<Advisories[]>(`${this.url}/contructions`);
      case '/advisory/goc-tu-van':
        return this.httpClient.get<Advisories[]>(`${this.url}/advisories`);
      case '/news/tin-tuc-trong-nganh':
        return this.httpClient.get<Advisories[]>(`${this.url}/industry-news`);
      case '/news/bao-gia-cua-nhom':
        return this.httpClient.get<Advisories[]>(`${this.url}/aluminum-door-quotes`);
      case '/news/bao-gia-cua-cuon':
        return this.httpClient.get<Advisories[]>(`${this.url}/rolling-door-quotes`);
      case '/news/bao-gia-cua-kinh-cuong-luc':
        return this.httpClient.get<Advisories[]>(`${this.url}/glass-door-quotes`);
    }
  }

  getAdvisoriesById(currentUrl, id: string): Observable<Advisories> {
    switch (currentUrl) {
      case `/advisory/kien-thuc/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/knowledges/${id}`);
      case `/advisory/tin-cong-trinh/${id}`:
        return this.httpClient.get<Advisories>(
          `${this.url}/contructions/${id}`
        );
      case `/advisory/goc-tu-van/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/advisories/${id}`);
      case `/news/tin-tuc-trong-nganh/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/industry-news/${id}`);
      case `/news/bao-gia-cua-nhom/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/aluminum-door-quotes/${id}`);
      case `/news/bao-gia-cua-cuon/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/rolling-door-quotes/${id}`);
      case `/news/bao-gia-cua-kinh-cuong-luc/${id}`:
        return this.httpClient.get<Advisories>(`${this.url}/glass-door-quotes/${id}`);
    }
  }
}
