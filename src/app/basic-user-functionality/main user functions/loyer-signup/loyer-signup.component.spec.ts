import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerSignupComponent } from './loyer-signup.component';

describe('LoyerSignupComponent', () => {
  let component: LoyerSignupComponent;
  let fixture: ComponentFixture<LoyerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
