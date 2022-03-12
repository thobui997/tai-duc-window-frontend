import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Advisories, BannerModel} from './advisories.model';
import {environment} from '../../../environments/environment';

const URL = {
  '/advisory/kien-thuc': `${environment.api_url}/knowledges`,
  '/advisory/tin-cong-trinh': `${environment.api_url}/contructions`,
  '/advisory/goc-tu-van': `${environment.api_url}/advisories`,
  '/news/tin-tuc-trong-nganh': `${environment.api_url}/industry-news`,
  '/news/bao-gia-cua-nhom': `${environment.api_url}/aluminum-door-quotes`,
  '/news/bao-gia-cua-cuon': `${environment.api_url}/rolling-door-quotes`,
  '/news/bao-gia-cua-kinh-cuong-luc': `${environment.api_url}/glass-door-quotes`,
};

@Injectable({
  providedIn: 'root',
})
export class AdvisoriesService {
  constructor(private httpClient: HttpClient) {
  }

  getUrl(urls): string {
    return URL[urls];
  }

  getAllAdvisories(currentUrl: string): Observable<Advisories[]> {
    return this.httpClient.get<Advisories[]>(this.getUrl(currentUrl));
  }

  getAdvisoriesById(currentUrl: string, id: string): Observable<Advisories> {
    const transformUrl = currentUrl.split('/').filter(idParam => idParam !== id).join('/');
    return this.httpClient.get<Advisories>(`${this.getUrl(transformUrl)}/${id}`);
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
