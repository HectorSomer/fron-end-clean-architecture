import { Component } from '@angular/core';
import { ButtonProductComponent } from './button-product/button-product.component';
import { ButtonSellComponent } from './button-sell/button-sell.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonProductComponent, ButtonSellComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
