import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeTasksComponent } from './loyee-tasks.component';

describe('LoyeeTasksComponent', () => {
  let component: LoyeeTasksComponent;
  let fixture: ComponentFixture<LoyeeTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
