import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../api/product/product.service';
import { pluck, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../api/product/product.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  products: ProductModel[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.productService.getCategoryById(id))
      )
      .subscribe((data) => {
        this.products = data.products;
      });
  }
}
