import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisories, BannerModel } from './advisories.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdvisoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllAdvisories(currentUrl: string): Observable<Advisories[]> {
    switch (currentUrl) {
      case '/advisory/kien-thuc':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/knowledges`
        );
      case '/advisory/tin-cong-trinh':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/contructions`
        );
      case '/advisory/goc-tu-van':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/advisories`
        );
      case '/news/tin-tuc-trong-nganh':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/industry-news`
        );
      case '/news/bao-gia-cua-nhom':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/aluminum-door-quotes`
        );
      case '/news/bao-gia-cua-cuon':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/rolling-door-quotes`
        );
      case '/news/bao-gia-cua-kinh-cuong-luc':
        return this.httpClient.get<Advisories[]>(
          `${environment.api_url}/glass-door-quotes`
        );
    }
  }

  getAdvisoriesById(currentUrl, id: string): Observable<Advisories> {
    switch (currentUrl) {
      case `/advisory/kien-thuc/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/knowledges/${id}`
        );
      case `/advisory/tin-cong-trinh/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/contructions/${id}`
        );
      case `/advisory/goc-tu-van/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/advisories/${id}`
        );
      case `/news/tin-tuc-trong-nganh/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/industry-news/${id}`
        );
      case `/news/bao-gia-cua-nhom/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/aluminum-door-quotes/${id}`
        );
      case `/news/bao-gia-cua-cuon/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/rolling-door-quotes/${id}`
        );
      case `/news/bao-gia-cua-kinh-cuong-luc/${id}`:
        return this.httpClient.get<Advisories>(
          `${environment.api_url}/glass-door-quotes/${id}`
        );
    }
  }

  getAllNews(): Observable<Advisories[]> {
    return this.httpClient.get<Advisories[]>(
      `${environment.api_url}/industry-news`
    );
  }

  getAllAdvisoryContruction(): Observable<Advisories[]> {
    return this.httpClient.get<Advisories[]>(
      `${environment.api_url}/contructions`
    );
  }

  getBanner(): Observable<BannerModel> {
    return this.httpClient.get<BannerModel>(`${environment.api_url}/banner`);
  }
}
