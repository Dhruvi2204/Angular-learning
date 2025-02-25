import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { settingsRoutingGuard } from './settings-routing.guard';

describe('settingsRoutingGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => settingsRoutingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
