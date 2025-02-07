import { Component,OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/entities/product';
import { GetProductControllerService } from '../../../infraestructure/controllers/get-product-controller.service';
@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent implements OnInit{
 @Input() products: Product[] = [];
 @Output() loadProducts = new EventEmitter<Product[]>();
 constructor(readonly getProductController: GetProductControllerService){}
 ngOnInit(): void {
    this.getProductController.getProducts().subscribe({
      next: products => {
        this.products = products;  
        this.loadProducts.emit(this.products);
      },
      error: err => {
        alert('Error al cargar productos' + err);
      }
    });
 }
}
