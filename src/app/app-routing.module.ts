import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoradztwoIKonsultingSectionComponent } from './components/doradztwo-i-konsulting-section/doradztwo-i-konsulting-section.component';
import { InspiracjeSectionComponent } from './components/inspiracje-section/inspiracje-section.component';
import { KontaktSectionComponent } from './components/kontakt-section/kontakt-section.component';
import { NaszeDoswiadczenieSectionComponent } from './components/nasze-doswiadczenie-section/nasze-doswiadczenie-section.component';
import { OutsourcingProcesowSectionComponent } from './components/outsourcing-procesow-section/outsourcing-procesow-section.component';
import { WspolpraceSectionComponent } from './components/wspolprace-section/wspolprace-section.component';

const routes: Routes = [
  { path: 'home', component: DoradztwoIKonsultingSectionComponent },
  { path: 'about', component: OutsourcingProcesowSectionComponent },
  { path: 'offer', component: WspolpraceSectionComponent },
  { path: 'destination', component: NaszeDoswiadczenieSectionComponent },
  { path: 'ticket', component: InspiracjeSectionComponent },
  { path: 'ticket', component: KontaktSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
