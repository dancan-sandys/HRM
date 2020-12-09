import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeLoginComponent } from './loyee-login.component';

describe('LoyeeLoginComponent', () => {
  let component: LoyeeLoginComponent;
  let fixture: ComponentFixture<LoyeeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
