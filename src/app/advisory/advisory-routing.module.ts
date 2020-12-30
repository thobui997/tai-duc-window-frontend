import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisoryComponent } from './advisory.component';
import { ArticleDetailComponent } from './../shared/article-list/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: 'goc-tu-van',
    children: [
      { path: ':slug', component: ArticleDetailComponent },
      { path: '', component: AdvisoryComponent },
    ],
  },
  {
    path: 'kien-thuc',
    children: [
      { path: ':slug', component: ArticleDetailComponent },
      { path: '', component: AdvisoryComponent },
    ],
  },
  {
    path: 'tin-cong-trinh',
    children: [
      { path: ':slug', component: ArticleDetailComponent },
      { path: '', component: AdvisoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvisoryRoutingModule {}
