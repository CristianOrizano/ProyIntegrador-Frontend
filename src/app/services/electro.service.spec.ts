import { TestBed } from '@angular/core/testing';

import { ElectroService } from './electro.service';

describe('ElectroService', () => {
  let service: ElectroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
