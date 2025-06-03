import { ProductsContainerService } from './../../services/products-container.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductsComponent } from "../products/products.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit   {

  constructor(private route:Router, private data:ProductsContainerService ){};

  Products:Product[]=this.data.data;

  viewProduct(id:number){
    this.route.navigate([`/product/${id}`])

  }
obs$ = new Observable((Subscriber)=>{
  Subscriber.next("first value");
});
obs2$ = new Observable((Subscriber)=>{
  setTimeout(()=>{
    Subscriber.next("this is async");
  },3000)
})

person1 = {fname:"mahmoud"};
person2 = {fname:"ahmed"};

ngOnInit(): void {

      this.obs$.subscribe((message)=>{
        console.log(this.person1.fname + message);

      })
      this.obs$.subscribe((message)=>{
        console.log(this.person2.fname + message);

      })
      this.obs2$.subscribe((message)=>{
        console.log(message);

      });
}

}
