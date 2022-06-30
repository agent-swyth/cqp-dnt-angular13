import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './partials/error/error.component';
import { HttpClientModule } from "@angular/common/http"
import { TokenInterceptorProvider } from './_helpers/token.interceptor';

@NgModule({
  // Import des composants
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  // Imports des modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Donner aux Injecteurs de service une mécanique qu'ils doivent utiliser
  providers: [TokenInterceptorProvider], // Runtime injector configuration
  bootstrap: [AppComponent]
})
export class AppModule { }
