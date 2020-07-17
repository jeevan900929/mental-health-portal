import { TestBed } from '@angular/core/testing';

import { ViewEventListenerService } from './view-event-listener.service';

describe('ViewEventListenerService', () => {
  let service: ViewEventListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewEventListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
