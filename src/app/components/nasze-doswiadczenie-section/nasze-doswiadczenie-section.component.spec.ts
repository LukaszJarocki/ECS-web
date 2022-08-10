import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaszeDoswiadczenieSectionComponent } from './nasze-doswiadczenie-section.component';

describe('NaszeDoswiadczenieSectionComponent', () => {
  let component: NaszeDoswiadczenieSectionComponent;
  let fixture: ComponentFixture<NaszeDoswiadczenieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaszeDoswiadczenieSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaszeDoswiadczenieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
