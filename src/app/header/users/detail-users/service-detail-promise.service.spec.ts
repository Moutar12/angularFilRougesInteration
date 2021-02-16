import { TestBed } from '@angular/core/testing';

import { ServiceDetailPromiseService } from './service-detail-promise.service';

describe('ServiceDetailPromiseService', () => {
  let service: ServiceDetailPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDetailPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
