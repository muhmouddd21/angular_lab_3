import { Injectable } from '@angular/core';
import  Products  from '../../assets/products.json';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsContainerService {

  data:Product[] = Products.products;
  constructor() { }
}
