import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerTasksComponent } from './loyer-tasks.component';

describe('LoyerTasksComponent', () => {
  let component: LoyerTasksComponent;
  let fixture: ComponentFixture<LoyerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
