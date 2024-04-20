import { TestBed } from '@angular/core/testing';

import { WdbpService } from './wdbp.service';

describe('WdbpService', () => {
  let service: WdbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WdbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
