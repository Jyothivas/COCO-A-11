import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product:Product |undefined;

constructor(private activateRoute:ActivatedRoute,private cartService:CartService){}

ngOnInit(){
  // console.log(this.activateRoute);
  // this.activateRoute.paramMap.subscribe(res=>{
  //   console.log(res);
  // })
  const route=this.activateRoute.snapshot.paramMap;
  console.log(route);
  const productIdRoute=Number(route.get('productId'));

  this.product=products.find(product=>product.id===productIdRoute);
  
}
addToCart(product:Product){
 //console.log(product);
 this.cartService.addToCart(product);
 window.alert('Your product has been added to the cart!');
}
}
