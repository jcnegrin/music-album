import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySwiperComponent } from './category-swiper.component';

describe('CategorySwiperComponent', () => {
  let component: CategorySwiperComponent;
  let fixture: ComponentFixture<CategorySwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
