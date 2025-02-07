import { Component } from '@angular/core';
import { ProductTableComponent } from '../../component-logic/product-table/product-table.component';
import { HeaderProductComponent } from "../header-product/header-product.component";
import { ButtonAddComponent } from "../../component-logic/button-add/button-add.component";
@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ProductTableComponent, HeaderProductComponent, ButtonAddComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

}
