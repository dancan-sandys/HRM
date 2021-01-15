import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveactionsComponent } from './leaveactions.component';

describe('LeaveactionsComponent', () => {
  let component: LeaveactionsComponent;
  let fixture: ComponentFixture<LeaveactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
