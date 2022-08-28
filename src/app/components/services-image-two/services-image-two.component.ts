import { Component, Input, OnInit } from '@angular/core';
import { servicesImgTwo } from '../shared/sercices-image-two';

@Component({
  selector: 'app-services-image-two',
  templateUrl: './services-image-two.component.html',
  styleUrls: ['./services-image-two.component.scss']
})
export class ServicesImageTwoComponent implements OnInit {

  @Input() imagesServTwo: servicesImgTwo [] = []
  @Input() indicators = true;
  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }
}
