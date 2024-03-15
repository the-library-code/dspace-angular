import { TestBed } from '@angular/core/testing';
import { GndService } from './gnd.service';

describe('GndService', () => {
   let service: GndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
