import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerDashboardComponent } from './loyer-dashboard.component';

describe('LoyerDashboardComponent', () => {
  let component: LoyerDashboardComponent;
  let fixture: ComponentFixture<LoyerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
