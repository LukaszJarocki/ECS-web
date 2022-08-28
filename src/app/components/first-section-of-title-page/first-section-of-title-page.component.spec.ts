import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionOfTitlePageComponent } from './first-section-of-title-page.component';

describe('FirstSectionOfTitlePageComponent', () => {
  let component: FirstSectionOfTitlePageComponent;
  let fixture: ComponentFixture<FirstSectionOfTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSectionOfTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSectionOfTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
