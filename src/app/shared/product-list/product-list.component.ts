import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../api/product/product.service';
import { ProductModel } from '../../api/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }
}
