import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    data: { title: 'Sản Phẩm' },
  },
  {
    path: 'advisory',
    loadChildren: () =>
      import('./advisory/advisory.module').then((m) => m.AdvisoryModule),
    data: { title: 'Tư Vấn' },
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
    data: { title: 'Tin Tức' },
  },
  {
    path: 'introduce',
    loadChildren: () =>
      import('./introduce/introduce.module').then((m) => m.IntroduceModule),
    data: { title: 'Giới Thiệu' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
    data: { title: 'Liên Hệ' },
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
