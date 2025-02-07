import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProductRepository } from './products/domain/repositories/product_repository';
import { ProductApiReposiorieService } from './products/infraestructure/api-repositorie/product-api-reposiorie.service';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    { provide: ProductRepository, useClass: ProductApiReposiorieService } // Vincula la interfaz con la implementación
  ]
};