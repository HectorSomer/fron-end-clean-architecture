import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Sell } from '../../../domain/entities/sell';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateSellControllerService } from '../../../infraestructure/controller/update-sell-controller.service';
@Component({
  selector: 'app-edit-sell-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-sell-form.component.html',
  styleUrl: './edit-sell-form.component.css'
})
export class EditSellFormComponent {
 @Input() info = { sellId: 0, i: 0 };
  @Output() closeEdit = new EventEmitter<void>();
  @Output() sellEdit = new EventEmitter<{ index: number, sell: Sell }>();
  formSell: FormGroup;

  constructor(readonly sellController: UpdateSellControllerService) {
    this.formSell = new FormGroup({
      concept: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      total_price: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  close() {
    this.closeEdit.emit();
  }

  editSell() {
    if (this.formSell.invalid) {
      alert("Llene todos los campos");
    } else {
      let newSell: Sell = {
        concept: this.formSell.get('concept')?.value,
        date: this.formSell.get('date')?.value,
        total_price: this.formSell.get('total_price')?.value,
      };

      this.sellController.editSell(this.info.sellId, newSell).subscribe({
        next: sell => {
          this.sellEdit.emit({ index: this.info.i, sell: sell });
          alert("Venta editado con éxito");
          this.closeEdit.emit();  
        },
        error: err => {
          console.log(this.info.sellId);
          alert('Error al editar producto: ' + err);
        }
      });
    }
  }
}
