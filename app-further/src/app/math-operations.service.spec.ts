import { TestBed } from '@angular/core/testing';

import { MathOperationsService } from './math-operations.service';

describe('MathOperationsService', () => {
  let service: MathOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
