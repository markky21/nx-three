import { TestBed } from '@angular/core/testing';

import { NxThreeRendererService } from './nx-three-renderer.service';

describe('NxThreeRendererService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxThreeRendererService = TestBed.get(NxThreeRendererService);
    expect(service).toBeTruthy();
  });
});
