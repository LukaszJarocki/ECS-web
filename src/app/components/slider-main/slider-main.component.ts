import { Component, Input, OnInit } from '@angular/core';

interface sliderImage{
  imageSrc: string;
  imageAlt: string;
  titleImage: string;
}

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss']
})
export class SliderMainComponent implements OnInit {


  ngOnInit(): void {

  }

}
