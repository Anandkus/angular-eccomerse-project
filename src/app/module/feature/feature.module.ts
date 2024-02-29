import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './componets/feature.component';
import { HomeComponent } from './componets/home/home.component';
import { CarouselComponent } from './componets/home/carousel/carousel.component';
import { ProductSliderComponent } from './componets/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './componets/home/home-product-card/home-product-card.component';



@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    CarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent


  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class FeatureModule { }
