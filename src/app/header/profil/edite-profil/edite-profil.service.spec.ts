import { TestBed } from '@angular/core/testing';

import { EditeProfilService } from './edite-profil.service';

describe('EditeProfilService', () => {
  let service: EditeProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
