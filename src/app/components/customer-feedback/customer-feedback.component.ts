import { Component, Input, OnInit } from '@angular/core';
import { customerFeedbackInfo } from '../shared/customerFeedbackInfo';
import { slider } from '../shared/slider';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})
export class CustomerFeedbackComponent implements OnInit {
  @Input() customerInfo: customerFeedbackInfo [] = []
  @Input() images: slider[] = []
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
      this.selectedIndex = this.customerInfo.length -1;
    }
    else{
      this.selectedIndex--
    }
  }
  onNextClick(){
    if(this.selectedIndex === this.customerInfo.length -1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
}
