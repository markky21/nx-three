import { TestBed } from '@angular/core/testing';

import { NxThreeCameraService } from './nx-three-camera.service';

describe('NxThreeCameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxThreeCameraService = TestBed.get(NxThreeCameraService);
    expect(service).toBeTruthy();
  });
});
