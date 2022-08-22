import { specialtiesPhotos } from './../shared/specialtiesPhotos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wspolprace-section',
  templateUrl: './wspolprace-section.component.html',
  styleUrls: ['./wspolprace-section.component.scss']
})
export class WspolpraceSectionComponent implements OnInit {

  @Input() indicators = true;

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



}
