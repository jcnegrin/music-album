import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListenNowRoutingModule } from './listen-now-routing.module';
import { ListenNowComponent } from './listen-now.component';


@NgModule({
  declarations: [
    ListenNowComponent
  ],
  imports: [
    CommonModule,
    ListenNowRoutingModule
  ]
})
export class ListenNowModule { }
