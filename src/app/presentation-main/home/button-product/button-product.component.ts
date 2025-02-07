import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-button-product',
  standalone: true,
  imports: [],
  templateUrl: './button-product.component.html',
  styleUrl: './button-product.component.css'
})
export class ButtonProductComponent {
  constructor(readonly router: Router){}
navigateToProduct(){
  this.router.navigate(['/product_area']);
}
}
