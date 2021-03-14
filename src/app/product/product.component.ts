import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Category } from '../api/product/product.model';
import { ProductService } from '../api/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  categories$: Observable<Category[]>;
  idCategory: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    this.getIdCategory();
  }

  navigateCategory(id: string): void {
    this.router.navigateByUrl(`/product/category/${id}`);
    this.getIdCategory();
  }

  getIdCategory(): void {
    this.activeRoute.firstChild.params
      .pipe(pluck('id'))
      .subscribe((data) => (this.idCategory = data));
  }
}
