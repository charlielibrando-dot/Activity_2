import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product';
import { Product } from '../intialization/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: false,
})
export class CatalogPage {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.products = this.productService.getProducts();
  }

  viewProduct(id: number): void {
  this.router.navigate(['/main/product.page', id]);
}
}