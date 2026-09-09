import { Injectable } from '@angular/core';
import { Product } from '../intialization/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 100,
      name: 'Basketball Shoes',
      image: 'assets/image/basketballshoes.png',
      price: 2499,
      description: 'Comfortable basketball shoes designed for indoor and outdoor play.'
    },
    {
      id: 102,
      name: 'Basketball',
      image: 'assets/image/basketball.png',
      price: 899,
      description: 'Durable basketball suitable for training and recreational games.'
    },
    {
      id: 103,
      name: 'Sports Jersey',
      image: 'assets/image/sportjersey.png',
      price: 799,
      description: 'Lightweight sports jersey for basketball activities.'
    },
    {
      id: 104,
      name: 'Basketball Shorts',
      image: 'assets/image/basketballshorts.png',
      price: 599,
      description: 'Comfortable and breathable basketball shorts.'
    },
    {
      id: 105,
      name: 'Sports Socks',
      image: 'assets/image/sportsocks.png',
      price: 299,
      description: 'Comfortable sports socks designed to provide support during physical activities.'
    },
    {
      id: 106,
      name: 'Basketball Backpack',
      image: 'assets/image/backack.png',
      price: 1299,
      description: 'Spacious backpack designed to carry basketball equipment and personal items.'
    },
    {
      id: 107,
      name: 'Wristband',
      image: 'assets/image/wristband.png',
      price: 199,
      description: 'Soft and comfortable wristband suitable for basketball and other sports.'
    },
    {
      id: 108,
      name: 'Sports Water Bottle',
      image: 'assets/image/water bottle.png',
      price: 399,
      description: 'Reusable sports water bottle designed for hydration during workouts and games.'
    },
    {
      id: 109,
      name: 'Basketball Knee Support',
      image: 'assets/image/kneesupport.png',
      price: 499,
      description: 'Flexible knee support designed to provide additional support during physical activities.'
    },
    {
      id: 110,
      name: 'Training Cone Set',
      image: 'assets/image/coneset.png',
      price: 699,
      description: 'Training cones useful for basketball drills, agility exercises, and practice sessions.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}