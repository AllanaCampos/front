import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';
import { WikiComponent } from './wiki/wiki.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JReaderComponent } from './jreader/jreader.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { MudaCorCategoriaDirective } from './muda-cor-categoria.directive';
import { MudaCorVeiculosDirective } from './muda-cor-veiculos.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    BarraBuscaComponent,
    ResultadoPesquisaComponent,
    WikiComponent,
    JReaderComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    MudaCorCategoriaDirective,
    MudaCorVeiculosDirective,
    FormularioComponent,
    RoteirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
