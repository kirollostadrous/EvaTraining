import { Component } from '@angular/core';
import { IProduct } from '../Shared_classes-types/IProduct';
import { ICategory } from '../Shared_classes-types/ICategory';
import { DiscountOffers } from '../Shared_classes-types/DiscountOffers';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
constructor(){
  this.Discount = DiscountOffers.TenPercent;
        this.StoreName = "Eva Store";
        this.StoreLogo = "https://www.evapharma.com/images/logo-black.svg";
        this.ProductList = [
        ];
        this.CategoryList = [ 
        ];
        this.ClientName = "";
        this.IsPurchased = true;
}
}
