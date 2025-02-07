import { Component } from '@angular/core';
import { Product } from '../../../domain/entities/product';
import { ProductTableComponent } from '../../component-logic/product-table/product-table.component';
import { HeaderProductComponent } from "../header-product/header-product.component";
import { ButtonAddComponent } from "../button-add/button-add.component";
import { AddFormComponent } from '../../component-logic/add-form/add-form.component';
import { EditFormComponent } from "../../component-logic/edit-form/edit-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ProductTableComponent, HeaderProductComponent, ButtonAddComponent, AddFormComponent, CommonModule, EditFormComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  info = { productId: 0, i: 0 };
  products: Product[] = [];
  isOpenModal = false;
  isOpenModalEdit = false;

  openModal() {
    this.isOpenModal = true;
  }

  openModalEdit($event: { productId: number, i: number }) {
    this.info = $event;
    this.isOpenModalEdit = true;
  }

  closeModalEdit() {
    this.isOpenModalEdit = false;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  newProduct($event: Product) {
    this.products.push($event);
  }

  loadProducts($event: Product[]) {
    this.products = $event;
  }

  edit($event: { index: number, product: Product }) {
    this.products[$event.index] = $event.product;
    this.isOpenModalEdit = false;
  }
}