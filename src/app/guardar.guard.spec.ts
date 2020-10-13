import { TestBed } from '@angular/core/testing';

import { GuardarGuard } from './guardar.guard';

describe('GuardarGuard', () => {
  let guard: GuardarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
