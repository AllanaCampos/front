import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {
  @Output() buscaFeita = new EventEmitter<string>();
  busca = "";

  getBusca(){
    this.busca = (<HTMLInputElement>document.getElementById("txtBusca"))!.value || "";
    this.pesquisado();
  }

  pesquisado(){
    this.buscaFeita.emit(this.busca);
  }
}
