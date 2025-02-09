import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button-add-sell',
  standalone: true,
  imports: [],
  templateUrl: './button-add-sell.component.html',
  styleUrl: './button-add-sell.component.css'
})
export class ButtonAddSellComponent {
@Output() open = new EventEmitter<void>();
}
