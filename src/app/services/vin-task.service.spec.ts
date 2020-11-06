import { TestBed } from '@angular/core/testing';

import { VinTaskService } from './vin-task.service';

describe('VinTaskService', () => {
  let service: VinTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
