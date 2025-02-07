import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../domain/entities/product';
import { EditProductControllerService } from '../../../infraestructure/controllers/edit-product-controller.service';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
  @Input() info = { productId: 0, i: 0 };
  @Output() closeEdit = new EventEmitter<void>();
  @Output() productEdit = new EventEmitter<{ index: number, product: Product }>();
  formProduct: FormGroup;

  constructor(readonly productController: EditProductControllerService) {
    this.formProduct = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  close() {
    this.closeEdit.emit();
  }

  editProduct() {
    if (this.formProduct.invalid) {
      alert("Llene todos los campos");
    } else {
      let newProduct: Product = {
        name: this.formProduct.get('name')?.value,
        description: this.formProduct.get('description')?.value,
        stock: this.formProduct.get('stock')?.value,
        price: this.formProduct.get('price')?.value,
      };

      this.productController.editProduct(this.info.productId, newProduct).subscribe({
        next: product => {
          this.productEdit.emit({ index: this.info.i, product: product });
          alert("Producto editado con éxito");
          this.closeEdit.emit();  // Cerrar la ventana de edición
        },
        error: err => {
          console.log(this.info.productId);
          alert('Error al editar producto: ' + err);
        }
      });
    }
  }
}