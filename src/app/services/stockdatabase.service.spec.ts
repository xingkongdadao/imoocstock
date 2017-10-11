import { TestBed, inject } from '@angular/core/testing';

import { StockdatabaseService } from './stockdatabase.service';

describe('StockdatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockdatabaseService]
    });
  });

  it('should be created', inject([StockdatabaseService], (service: StockdatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
