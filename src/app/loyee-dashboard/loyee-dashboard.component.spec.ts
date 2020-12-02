import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeDashboardComponent } from './loyee-dashboard.component';

describe('LoyeeDashboardComponent', () => {
  let component: LoyeeDashboardComponent;
  let fixture: ComponentFixture<LoyeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
