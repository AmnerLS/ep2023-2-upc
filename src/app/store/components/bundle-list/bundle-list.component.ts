import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Bundle} from "../../model/bundle.entity";
import {Product} from "../../model/product.entity";
import {BundlesService} from "../../services/bundles.service";
import {ProductsService} from "../../services/products.service";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-bundle-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf, CurrencyPipe],
  templateUrl: './bundle-list.component.html',
  styleUrl: './bundle-list.component.css'
})
export class BundleListComponent {
  bundlesData: Array<Bundle>=[];
  productsData: Array<Product>=[];

  constructor(private bundleService: BundlesService, private productService: ProductsService) {
  }

  private getAllBundles() {
    this.bundleService.getAll().subscribe((response: any) => {
      this.bundlesData = response;
    });
  }

  private getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      this.productsData = response;
    });
  }

  calculateSavings(bundle: Bundle): number {
    let totalProductPrice = 0;
    for (let productId of bundle.productsId) {
      let product = this.productsData.find(product => product.id === productId);
      if (product) {
        totalProductPrice += product.price;
      }
    }
    return totalProductPrice - bundle.price;
  }


  ngOnInit() {
    this.getAllBundles();
    this.getAllProducts();
  }
}
