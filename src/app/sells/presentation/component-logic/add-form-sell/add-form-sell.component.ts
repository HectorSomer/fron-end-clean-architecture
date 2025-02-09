import { Component, Output, EventEmitter} from '@angular/core';
import { Sell } from '../../../domain/entities/sell';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateSellContollerService } from '../../../infraestructure/controller/create-sell-contoller.service';
@Component({
  selector: 'app-add-form-sell',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form-sell.component.html',
  styleUrl: './add-form-sell.component.css'
})
export class AddFormSellComponent {
  @Output() close = new EventEmitter<void>();
  @Output() sellAdd = new EventEmitter<Sell>();
  formSell : FormGroup;
  constructor(readonly sellController :CreateSellContollerService){
    this.formSell = new FormGroup({
      concept: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      total_price: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }
  saveSell() {
  let newSell: Sell= {
    concept: this.formSell.value.concept,
    date: this.formSell.value.date,
    total_price: this.formSell.value.total_price,
   }
    this.sellController.createSell(newSell).subscribe({
      next: sell => {
        this.sellAdd.emit(sell);  
        alert("Venta agregada con éxito")
        this.close.emit();
      },
      error: err => {
        alert('Error al crear producto' + err);
      }
    });
  }
}
