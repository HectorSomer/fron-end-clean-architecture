import { Component, OnInit } from '@angular/core';
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
 products: Product[] | null= [];
 constructor(readonly getProductController: GetProductControllerService){}
 ngOnInit(): void {
    this.getProductController.getProduct().subscribe({
      next: products => {
        this.products = products;  
      },
      error: err => {
        alert('Error al cargar productos' + JSON.stringify(err));
      }
    });
 }
}
