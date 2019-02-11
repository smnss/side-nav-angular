import { TestBed } from '@angular/core/testing';

import { PatchMgmtService } from './patch-mgmt.service';

describe('PatchMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatchMgmtService = TestBed.get(PatchMgmtService);
    expect(service).toBeTruthy();
  });
});
