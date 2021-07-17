import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenNowComponent } from './listen-now.component';

describe('ListenNowComponent', () => {
  let component: ListenNowComponent;
  let fixture: ComponentFixture<ListenNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
