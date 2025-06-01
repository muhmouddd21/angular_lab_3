import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { ProductsContainerService } from '../../services/products-container.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent implements OnInit{
  product!:Product;
  constructor(private products:ProductsContainerService,private router:ActivatedRoute){};

  ngOnInit(): void {
     const idParam = this.router.snapshot.paramMap.get("id");
     const id = idParam ? +idParam : null;

      if (id !== null) {
        this.product = this.products.data.find(p => p.id === id)!;
  }
}

}
