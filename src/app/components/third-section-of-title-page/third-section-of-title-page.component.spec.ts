import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSectionOfTitlePageComponent } from './third-section-of-title-page.component';

describe('ThirdSectionOfTitlePageComponent', () => {
  let component: ThirdSectionOfTitlePageComponent;
  let fixture: ComponentFixture<ThirdSectionOfTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSectionOfTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdSectionOfTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
