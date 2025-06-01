import { TestBed } from '@angular/core/testing';

import { ProductsContainerService } from './products-container.service';

describe('ProductsContainerService', () => {
  let service: ProductsContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
