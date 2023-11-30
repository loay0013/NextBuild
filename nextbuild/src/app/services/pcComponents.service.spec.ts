import { TestBed } from '@angular/core/testing';
import { PcComponentService } from './pcComponents.service';

describe('PcComponentService', () => {
  let service: PcComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
