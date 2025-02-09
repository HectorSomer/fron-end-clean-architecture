import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProductRepository } from './products/domain/repositories/product_repository';
import { ProductApiReposiorieService } from './products/infraestructure/api-repositorie/product-api-reposiorie.service';
import { SellRepository } from './sells/domain/repositories/sell-repository';
import { ApiRepositorySellService } from './sells/infraestructure/api-repositorie/api-repository-sell.service';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    { provide: ProductRepository, useClass: ProductApiReposiorieService },
    { provide: SellRepository, useClass: ApiRepositorySellService}
  ]
};