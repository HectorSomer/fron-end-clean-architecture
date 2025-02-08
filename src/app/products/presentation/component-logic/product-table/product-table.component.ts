import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/entities/product';
import { GetProductControllerService } from '../../../infraestructure/controllers/get-product-controller.service';
import { DeleteProductControllerService } from '../../../infraestructure/controllers/delete-product-controller.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() loadProducts = new EventEmitter<Product[]>();
  @Output() modalEdit = new EventEmitter<void>();
  @Output() idProduct = new EventEmitter<{ productId: number, i: number }>();
  productDeleted = false;
  constructor(readonly getProductController: GetProductControllerService, readonly deleteProductController: DeleteProductControllerService) {}

  ngOnInit(): void {
    this.getProductController.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => {
        alert('Error al cargar productos' + err);
      }
    });
    this.loadProducts.emit(this.products);
  }

  edit(idProduct: number, i: number) {
    this.idProduct.emit({ productId: idProduct, i: i });
    this.modalEdit.emit();  
  }
  delete(idProduct: number, i: number){
   this.deleteProductController.deleteProduct(idProduct).subscribe({
    next: state => {
      this.productDeleted = state; 
      this.products.splice(i, 1);
      alert("Eliminado con éxito");
    },
    error: err => {
      alert('Error al eliminar' + err);
    }
  });
  }
}