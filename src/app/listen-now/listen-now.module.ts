import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListenNowRoutingModule } from './listen-now-routing.module';
import { ListenNowComponent } from './listen-now.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  declarations: [ListenNowComponent],
  imports: [CommonModule, ListenNowRoutingModule, SharedModule],
})
export class ListenNowModule {}
