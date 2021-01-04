import { TestBed } from '@angular/core/testing';

import { ServicesProfilService } from './services-profil.service';

describe('ServicesProfilService', () => {
  let service: ServicesProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
