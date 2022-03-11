import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../api/product/product.model';
import { ProductService } from '../api/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // list of product categories
  categories$: Observable<Category[]>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
  }
}
