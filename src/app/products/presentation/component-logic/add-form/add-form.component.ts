import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../../../domain/entities/product';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProductControllerService } from '../../../infraestructure/controllers/create-product-controller.service';
@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() productAdd = new EventEmitter<Product>();
  formProduct : FormGroup;
  constructor(readonly productController : CreateProductControllerService){
    this.formProduct = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }
  saveProduct() {
  let newProduct: Product= {
    name: this.formProduct.value.name,
    description: this.formProduct.value.description,
    stock: this.formProduct.value.stock,
    price: this.formProduct.value.price
   }
    this.productController.createProduct(newProduct).subscribe({
      next: product => {
        this.productAdd.emit(product);  
        alert("Producto agregado con éxito")
        this.close.emit();
      },
      error: err => {
        alert('Error al crear producto' + err);
      }
    });
  }
}
