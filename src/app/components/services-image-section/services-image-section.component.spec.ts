import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesImageSectionComponent } from './services-image-section.component';

describe('ServicesImageSectionComponent', () => {
  let component: ServicesImageSectionComponent;
  let fixture: ComponentFixture<ServicesImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesImageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
