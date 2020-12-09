import { TestBed } from '@angular/core/testing';

import { GeturlsService } from './geturls.service';

describe('GeturlsService', () => {
  let service: GeturlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeturlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
