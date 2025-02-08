import { Routes } from '@angular/router';
import { HomeComponent } from './presentation-main/home/home.component';
import { ProductViewComponent } from './products/presentation/component-view/product-view/product-view.component';
import { SellViewComponent } from './sells/presentation/component-view/sell-view/sell-view.component';
export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'product_area', component: ProductViewComponent},
    {path: 'sell_area', component: SellViewComponent}
];
