import { TestBed } from '@angular/core/testing';

import { VinDataService } from './vin-data.service';

describe('VinDataService', () => {
  let service: VinDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
