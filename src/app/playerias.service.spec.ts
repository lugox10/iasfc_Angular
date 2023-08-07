import { TestBed } from '@angular/core/testing';

import { PlayeriasService } from './playerias.service';

describe('PlayeriasService', () => {
  let service: PlayeriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayeriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
