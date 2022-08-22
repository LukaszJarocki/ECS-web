import { Component, Input, OnInit } from '@angular/core';
import { specialtiesPhotos } from './../shared/specialtiesPhotos';

@Component({
  selector: 'app-specializations',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.scss']
})
export class SpecializationsComponent implements OnInit {

  @Input() images: specialtiesPhotos[] = []
  @Input() indicators = true;
  @Input() sliderSectionInfo = true;
@Input() controls = true;
@Input() autoSlide = false;
@Input() slideInterval = 5000;
  selectedIndex = 0;


  constructor() { }

  ngOnInit(): void{
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }
  
  autoSlideImages(): void{
    setInterval(()=>{
      this.onNextClick()
    }, this.slideInterval)
  }
  
  selectImage(index: number): void{
    this.selectedIndex = index;
  }
  
  onPrevClick(){
    if(this.selectedIndex ===0){
      this.selectedIndex = this.images.length -1;
    }
    else{
      this.selectedIndex--
    }
  }
  onNextClick(){
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
}
