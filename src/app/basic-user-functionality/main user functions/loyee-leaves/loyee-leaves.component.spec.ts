import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeLeavesComponent } from './loyee-leaves.component';

describe('LoyeeLeavesComponent', () => {
  let component: LoyeeLeavesComponent;
  let fixture: ComponentFixture<LoyeeLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeLeavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
