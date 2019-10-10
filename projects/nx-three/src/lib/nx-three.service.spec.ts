import { TestBed } from '@angular/core/testing';

import { NxThreeService } from './nx-three.service';

describe('ThreeWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxThreeService = TestBed.get(NxThreeService);
    expect(service).toBeTruthy();
  });
});
