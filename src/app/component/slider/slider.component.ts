import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.images = new Array(
      './assets/sliderimages/img1.jpg',
      './assets/sliderimages/img2.jpg',
      './assets/sliderimages/img3.jpg',
      './assets/sliderimages/img4.jpg',
      './assets/sliderimages/img5.jpg'      
    )
  }

}
