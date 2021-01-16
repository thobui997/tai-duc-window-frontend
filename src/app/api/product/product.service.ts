import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, ProductModel } from './product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  u;
  constructor(private httpClient: HttpClient) {}

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(
      `${environment.api_url}/categories/${id}`
    );
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.api_url}/categories`);
  }

  getAllProduct(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(
      `${environment.api_url}/products`
    );
  }

  getProductById(id: string): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(
      `${environment.api_url}/products/${id}`
    );
  }
}
