import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../intialization/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.page.html',
  styleUrls: ['./product.page.page.scss'],
  standalone: false,
})
export class ProductPagePage implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
    });
  }
}