import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, Input, EventEmitter } from '@angular/core';
import { Sell } from '../../../domain/entities/sell';
import { GetSellControllerService } from '../../../infraestructure/controller/get-sell-controller.service';
import { DeleteSellControllerService } from '../../../infraestructure/controller/delete-sell-controller.service';
@Component({
  selector: 'app-sell-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sell-table.component.html',
  styleUrl: './sell-table.component.css'
})
export class SellTableComponent {
 @Input() sells: Sell[] = [];
  @Output() loadSells = new EventEmitter<Sell[]>();
  @Output() modalEdit = new EventEmitter<void>();
  @Output() idSell = new EventEmitter<{ sellId: number, i: number }>();
  sellDeleted = false;
  constructor(readonly getSellController: GetSellControllerService, readonly deleteSellController: DeleteSellControllerService) {}

  ngOnInit(): void {
    this.getSellController.getSells().subscribe({
      next: sells => {
        this.sells = sells;
      },
      error: err => {
        alert('Error al cargar ventas' + err);
      }
    });
    this.loadSells.emit(this.sells);
  }

  edit(idSelll: number, i: number) {
    this.idSell.emit({ sellId: idSelll, i: i });
    this.modalEdit.emit();  
  }
  delete(idSell: number, i: number){
    
   this.deleteSellController.deleteSell(idSell).subscribe({
    next: state => {
      this.sellDeleted = state; 
      this.sells.splice(i, 1);
      alert("Eliminado con éxito");
    },
    error: err => {
      alert('Error al eliminar' + err);
    }
  });
  }
}
