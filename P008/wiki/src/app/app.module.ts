import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { NegritoPipe } from './negrito.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BarraBuscaComponent,
    ResultadoPesquisaComponent,
    NegritoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
