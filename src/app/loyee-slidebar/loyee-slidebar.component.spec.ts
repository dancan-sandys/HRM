import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyeeSlidebarComponent } from './loyee-slidebar.component';

describe('LoyeeSlidebarComponent', () => {
  let component: LoyeeSlidebarComponent;
  let fixture: ComponentFixture<LoyeeSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyeeSlidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyeeSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
