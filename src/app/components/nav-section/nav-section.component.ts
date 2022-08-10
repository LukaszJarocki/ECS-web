import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent {

  navbarfixed: boolean = false;
  navbarcolor: boolean = false;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
      this.navbarcolor = true;
    } else {
      this.navbarfixed = false;
      this.navbarcolor = false;
    }
  }


  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }
  toAbout() {
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  toOffer() {
    document.getElementById('offer')?.scrollIntoView();
  }
  toDestination() {
    document
      .getElementById('destination')
      ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

}
