import { servicesImg } from './../shared/service-image';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wspolprace-section',
  templateUrl: './wspolprace-section.component.html',
  styleUrls: ['./wspolprace-section.component.scss']
})
export class WspolpraceSectionComponent implements OnInit {

  @Input() indicators = true;
  @Input() images: servicesImg[] = []
  
  btnStyle = 'btn-default';
  
  selectedIndex = 0;
  imageSrc = '';
  messageText = '';

  ourSpecjaltiesPhotos: any = [
    {
      src: '../../../assets/photos/rafiner.png',
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
    },
    {
      src: '../../../assets/photos/Rectangle 74.png',
      name: 'Nieruchomości'
    }
  ]

  isHidden = false;
  constructor() { 
  }
  

  ngOnInit(): void {
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onClick(imageNameObject: any) {
    this.imageSrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
  }

  submit() {
    if(this.btnStyle == 'image-services') {
      this.btnStyle = 'image-services-first-photo';
    } else {
      this.btnStyle = 'image-services';
    }
  }

}
