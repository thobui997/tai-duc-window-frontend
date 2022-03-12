import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../api/product/product.service';
import {pluck, switchMap} from 'rxjs/operators';
import {ProductModel} from '../../api/product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail$: Observable<ProductModel>;
  config: ConfigTab = {
    type: 'description',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.productDetail$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) =>
        this.productService.getProductById(id)
      ),
    );
  }

  selectedTab(type: string): void {
    this.config = {type};
  }
}

interface ConfigTab {
  type: string;
}
