import { ProductsContainerService } from './../../services/products-container.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductsComponent } from "../products/products.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent   {

  constructor(private route:Router, private data:ProductsContainerService ){};

  Products:Product[]=this.data.data;

  viewProduct(id:number){
    this.route.navigate([`/product/${id}`])

  }
}
