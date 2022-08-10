import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingProcesowSectionComponent } from './outsourcing-procesow-section.component';

describe('OutsourcingProcesowSectionComponent', () => {
  let component: OutsourcingProcesowSectionComponent;
  let fixture: ComponentFixture<OutsourcingProcesowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourcingProcesowSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcingProcesowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
