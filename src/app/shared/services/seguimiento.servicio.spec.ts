import { TestBed } from '@angular/core/testing';

import { seguimientoServicio } from './seguimiento.servicio';

describe('seguimientoServicio', () => {
  let service: seguimientoServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(seguimientoServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
