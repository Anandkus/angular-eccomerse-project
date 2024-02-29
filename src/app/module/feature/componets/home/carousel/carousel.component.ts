import { Component } from '@angular/core';
import { carousalData } from 'src/data/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carousalData: any;
  currentSlide = 0;
  ngOnInit() {
    this.carousalData = carousalData;
    this.autoPlay();
  }
  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carousalData.length;
  }
}
