import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySwiperComponent } from '../../components/category-swiper/category-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CategorySwiperComponent],
  imports: [
    CommonModule,
    SwiperModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ],
  exports: [
    CategorySwiperComponent,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
