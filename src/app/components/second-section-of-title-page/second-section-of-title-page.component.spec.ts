import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionOfTitlePageComponent } from './second-section-of-title-page.component';

describe('SecondSectionOfTitlePageComponent', () => {
  let component: SecondSectionOfTitlePageComponent;
  let fixture: ComponentFixture<SecondSectionOfTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSectionOfTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSectionOfTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
