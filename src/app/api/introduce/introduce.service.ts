import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntroduceModel } from './introduce.model';

@Injectable({
  providedIn: 'root',
})
export class IntroduceService {
  url = 'http://localhost:1337';
  constructor(private httpClient: HttpClient) {}

  getInformationOfIntroduce(): Observable<IntroduceModel> {
    return this.httpClient.get<IntroduceModel>(`${this.url}/introduce`);
  }
}
