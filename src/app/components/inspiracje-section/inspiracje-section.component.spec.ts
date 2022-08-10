import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiracjeSectionComponent } from './inspiracje-section.component';

describe('InspiracjeSectionComponent', () => {
  let component: InspiracjeSectionComponent;
  let fixture: ComponentFixture<InspiracjeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspiracjeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspiracjeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
