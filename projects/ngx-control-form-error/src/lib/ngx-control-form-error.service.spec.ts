import { TestBed } from '@angular/core/testing';

import { NgxControlFormErrorService } from './ngx-control-form-error.service';

describe('NgxControlFormErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxControlFormErrorService = TestBed.get(NgxControlFormErrorService);
    expect(service).toBeTruthy();
  });
});
