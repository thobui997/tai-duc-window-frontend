import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../api/product/product.model';
import {ProductService} from '../../api/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProduct();
  }
}
