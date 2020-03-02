import { TestBed } from '@angular/core/testing';

import { HorariossalonService } from './horariossalon.service';

describe('HorariossalonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorariossalonService = TestBed.get(HorariossalonService);
    expect(service).toBeTruthy();
  });
});
