import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../shared/product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: { title: 'Sản Phẩm' },
      },
      {
        path: 'category/:id',
        component: ProductCategoryComponent,
        data: { title: 'Sản Phẩm' },
      },
    ],
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    data: { title: 'Sản Phẩm' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
