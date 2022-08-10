import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { SliderMainComponent } from './components/slider-main/slider-main.component';
import { DoradztwoIKonsultingSectionComponent } from './components/doradztwo-i-konsulting-section/doradztwo-i-konsulting-section.component';
import { OutsourcingProcesowSectionComponent } from './components/outsourcing-procesow-section/outsourcing-procesow-section.component';
import { WspolpraceSectionComponent } from './components/wspolprace-section/wspolprace-section.component';
import { NaszeDoswiadczenieSectionComponent } from './components/nasze-doswiadczenie-section/nasze-doswiadczenie-section.component';
import { InspiracjeSectionComponent } from './components/inspiracje-section/inspiracje-section.component';
import { KontaktSectionComponent } from './components/kontakt-section/kontakt-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavSectionComponent,
    SliderMainComponent,
    DoradztwoIKonsultingSectionComponent,
    OutsourcingProcesowSectionComponent,
    WspolpraceSectionComponent,
    NaszeDoswiadczenieSectionComponent,
    InspiracjeSectionComponent,
    KontaktSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
