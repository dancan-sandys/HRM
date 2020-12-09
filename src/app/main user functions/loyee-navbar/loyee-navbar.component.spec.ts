import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeNavbarComponent } from './loyee-navbar.component';

describe('LoyeeNavbarComponent', () => {
  let component: LoyeeNavbarComponent;
  let fixture: ComponentFixture<LoyeeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
