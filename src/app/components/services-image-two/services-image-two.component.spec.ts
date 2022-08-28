import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesImageTwoComponent } from './services-image-two.component';

describe('ServicesImageTwoComponent', () => {
  let component: ServicesImageTwoComponent;
  let fixture: ComponentFixture<ServicesImageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesImageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesImageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
