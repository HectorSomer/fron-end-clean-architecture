import { Routes } from '@angular/router';
import { HomeComponent } from './presentation-main/home/home.component';
import { ProductViewComponent } from './products/presentation/component-view/product-view/product-view.component';
export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'product_area', component: ProductViewComponent}
];
