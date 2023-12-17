import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarrosselComponent } from './carrossel/carrossel.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    DestaquesComponent,
    ServicosComponent,
    ResultadosComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
