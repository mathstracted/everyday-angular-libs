import { TestBed } from '@angular/core/testing';

import { RuntimeFormService } from './runtime-form.service';

describe('RuntimeFormService', () => {
  let service: RuntimeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuntimeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
