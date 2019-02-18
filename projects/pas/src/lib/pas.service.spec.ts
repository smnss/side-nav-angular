import { TestBed } from '@angular/core/testing';

import { PasService } from './pas.service';

describe('PasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasService = TestBed.get(PasService);
    expect(service).toBeTruthy();
  });
});
