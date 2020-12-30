import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisoryRoutingModule } from './advisory-routing.module';
import { AdvisoryComponent } from './advisory.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [AdvisoryComponent],
  imports: [
    CommonModule,
    AdvisoryRoutingModule,
    SharedModule
  ]
})
export class AdvisoryModule { }
