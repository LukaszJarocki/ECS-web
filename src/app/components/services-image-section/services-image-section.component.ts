import { Component, Input, OnInit } from '@angular/core';
import { servicesImg } from './../shared/service-image';

@Component({
  selector: 'app-services-image-section',
  templateUrl: './services-image-section.component.html',
  styleUrls: ['./services-image-section.component.scss']
})
export class ServicesImageSectionComponent implements OnInit {

  @Input() imagesServ: servicesImg [] = []
  @Input() indicators = true;


  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {

  }



  
  selectImage(index: number): void{
    this.selectedIndex = index;
  }


}
