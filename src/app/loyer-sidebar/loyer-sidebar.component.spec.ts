import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyerSidebarComponent } from './loyer-sidebar.component';

describe('LoyerSidebarComponent', () => {
  let component: LoyerSidebarComponent;
  let fixture: ComponentFixture<LoyerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyerSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
