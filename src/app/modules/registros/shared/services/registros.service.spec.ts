import { TestBed } from '@angular/core/testing';

import { RegistrosServices } from './registros.service';

describe('RegistrosService', () => {
  let service: RegistrosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
