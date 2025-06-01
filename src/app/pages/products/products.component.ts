import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import  Products  from '../../../assets/products.json';
import { Product } from '../../interfaces/product';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  data: any = Products.products;
 @Output() emitData:EventEmitter <any> = new EventEmitter();
  ngOnInit(): void {
      this.emitData.emit(this.data);

  }
}
