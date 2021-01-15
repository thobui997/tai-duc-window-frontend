import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product/product.service';
import { Category } from '../api/product/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  categories: Category[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
}
