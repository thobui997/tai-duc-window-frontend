import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:1337';
  constructor(private httpClient: HttpClient) {}

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.url}/categories/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/categories`);
  }

  getProductById(id: string): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.url}/products/${id}`);
  }
}
