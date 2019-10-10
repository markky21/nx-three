import { TestBed } from '@angular/core/testing';

import { NxThreeSceneService } from './nx-three-scene.service';

describe('NxThreeSceneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxThreeSceneService = TestBed.get(NxThreeSceneService);
    expect(service).toBeTruthy();
  });
});
