import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthSectionOfTitlePageComponent } from './fifth-section-of-title-page.component';

describe('FifthSectionOfTitlePageComponent', () => {
  let component: FifthSectionOfTitlePageComponent;
  let fixture: ComponentFixture<FifthSectionOfTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthSectionOfTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthSectionOfTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
