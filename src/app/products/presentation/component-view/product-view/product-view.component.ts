import { Component } from '@angular/core';
import { ProductTableComponent } from '../../component-logic/product-table/product-table.component';
import { HeaderProductComponent } from "../header-product/header-product.component";
import { ButtonAddComponent } from "../button-add/button-add.component";
import { AddFormComponent } from '../../component-logic/add-form/add-form.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/entities/product';
@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ProductTableComponent, HeaderProductComponent, ButtonAddComponent, AddFormComponent, CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
products : Product[] = []
isOpenModal = false;
openModal(){
  this.isOpenModal = true;
}
closeModal(){
  this.isOpenModal = false;
}
newProduct($event: Product){
  this.products.push($event);
}
loadProducts($event: Product[]){
  this.products = $event;
}
}
