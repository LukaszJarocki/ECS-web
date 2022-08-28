import { Component, Input, OnInit } from '@angular/core';
import { servicesImg } from './../shared/service-image';

@Component({
  selector: 'app-second-section-of-title-page',
  templateUrl: './second-section-of-title-page.component.html',
  styleUrls: ['./second-section-of-title-page.component.scss']
})
export class SecondSectionOfTitlePageComponent implements OnInit {

  @Input() images: servicesImg[] = []
  @Input() indicators = true;

  selectedIndex = 0;
  imageSrc = '';
  messageText = '';
  constructor() { }

  ourSpecjaltiesPhotos: any = [
    {
      src: '../../../assets/photos/workers.png',
      name: 'Przemysł i produkcja'
    },
    {
      src: '../../../assets/photos/rafiner.png',
      name: 'Branża IT'
    },
    {
      src: '../../../assets/photos/Rectangle 74.png',
      name: 'Retail'
    },
    {
      src: '../../../assets/photos/rafiner.png',
      name: 'Legal i Finanse'
    }
  ]


  ngOnInit(): void {
  }
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onClick(imageNameObject: any) {
    this.imageSrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
  }
}
