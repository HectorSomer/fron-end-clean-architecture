import { Component } from '@angular/core';
import { SellHeaderComponent } from "../sell-header/sell-header.component";

@Component({
  selector: 'app-sell-view',
  standalone: true,
  imports: [SellHeaderComponent],
  templateUrl: './sell-view.component.html',
  styleUrl: './sell-view.component.css'
})
export class SellViewComponent {

}
