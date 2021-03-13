import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../api/product/product.service';
import { map, pluck, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../api/product/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) =>
        this.productService
          .getCategoryById(id)
          .pipe(map((data) => data.products))
      )
    );
  }
}
