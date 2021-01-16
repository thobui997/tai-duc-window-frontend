import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntroduceModel } from './introduce.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IntroduceService {
  constructor(private httpClient: HttpClient) {}

  getInformationOfIntroduce(): Observable<IntroduceModel> {
    return this.httpClient.get<IntroduceModel>(
      `${environment.api_url}/introduce`
    );
  }
}
