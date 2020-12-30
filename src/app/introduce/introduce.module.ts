import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceRoutingModule } from './introduce-routing.module';
import { IntroduceComponent } from './introduce.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IntroduceComponent],
  imports: [CommonModule, IntroduceRoutingModule, SharedModule],
})
export class IntroduceModule {}
