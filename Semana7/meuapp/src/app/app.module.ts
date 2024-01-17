import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DestaqueDirective } from './destaque.directive';
import { DestaqueComEventoDirective } from './destaque-com-evento.directive';
import { RepitaXvezesDirective } from './repita-xvezes.directive';
import { AnimacaoDirective } from './animacao.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    TarefasComponent,
    DestaqueDirective,
    DestaqueComEventoDirective,
    RepitaXvezesDirective,
    AnimacaoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
