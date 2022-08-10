import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoradztwoIKonsultingSectionComponent } from './doradztwo-i-konsulting-section.component';

describe('DoradztwoIKonsultingSectionComponent', () => {
  let component: DoradztwoIKonsultingSectionComponent;
  let fixture: ComponentFixture<DoradztwoIKonsultingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoradztwoIKonsultingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoradztwoIKonsultingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
