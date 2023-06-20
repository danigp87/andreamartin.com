import { Component } from '@angular/core';
import { ArraysService } from '@app/arrays.service';
import { shop } from '@app/interfaces';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent {

  productsArray: any[]

  constructor(private arraysService: ArraysService) {
    this.productsArray = this.arraysService.productsArray
  }

  carrito: shop[] = []

  addToCart(product: any) {
    this.carrito.push(product);
    console.log(this.carrito)
  }

}
