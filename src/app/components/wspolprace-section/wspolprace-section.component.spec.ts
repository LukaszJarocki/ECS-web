import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WspolpraceSectionComponent } from './wspolprace-section.component';

describe('WspolpraceSectionComponent', () => {
  let component: WspolpraceSectionComponent;
  let fixture: ComponentFixture<WspolpraceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WspolpraceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WspolpraceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
