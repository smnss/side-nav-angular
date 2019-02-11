import { TestBed } from '@angular/core/testing';

import { DeviceMgmtService } from './device-mgmt.service';

describe('DeviceMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceMgmtService = TestBed.get(DeviceMgmtService);
    expect(service).toBeTruthy();
  });
});
