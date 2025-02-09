import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-sell',
  standalone: true,
  imports: [],
  templateUrl: './button-sell.component.html',
  styleUrl: './button-sell.component.css'
})
export class ButtonSellComponent {
constructor(readonly router: Router){}

navigateToSell(){
  this.router.navigate(['/sell_area']);
}
}
