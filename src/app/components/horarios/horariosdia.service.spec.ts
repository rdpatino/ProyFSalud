import { TestBed } from '@angular/core/testing';

import { HorariosdiaService } from './horariosdia.service';

describe('HorariosdiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorariosdiaService = TestBed.get(HorariosdiaService);
    expect(service).toBeTruthy();
  });
});
