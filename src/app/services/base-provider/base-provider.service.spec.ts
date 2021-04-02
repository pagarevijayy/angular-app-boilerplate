import { TestBed } from '@angular/core/testing';

import { BaseProviderService } from './base-provider.service';

describe('BaseProviderService', () => {
  let service: BaseProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
