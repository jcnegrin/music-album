import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySwiperComponent } from '../../components/category-swiper/category-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CategorySwiperComponent],
  imports: [CommonModule, SwiperModule, MatCardModule],
  exports: [CategorySwiperComponent],
})
export class SharedModule {}
