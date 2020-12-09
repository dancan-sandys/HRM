import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerLoginComponent } from './loyer-login.component';

describe('LoyerLoginComponent', () => {
  let component: LoyerLoginComponent;
  let fixture: ComponentFixture<LoyerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
