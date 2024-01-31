import { TestBed } from '@angular/core/testing';

import { NumerinhosService } from './numerinhos.service';

describe('NumerinhosService', () => {
  let service: NumerinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
