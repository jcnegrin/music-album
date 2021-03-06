import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import { Item } from '../../models/Items';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-category-swiper',
  templateUrl: './category-swiper.component.html',
  styleUrls: ['./category-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CategorySwiperComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Item[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSwiper(e: any) {
    console.log(e);
  }

  onSlideChange() {}
}
