import { TestBed } from '@angular/core/testing';

import { ListComponentsConfigService } from './list-components-config.service';

describe('ListComponentsConfigService', () => {
  let service: ListComponentsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListComponentsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
