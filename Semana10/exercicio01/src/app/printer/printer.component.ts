import { Component } from '@angular/core';
import { NumerinhosService } from '../numerinhos.service';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrl: './printer.component.css'
})
export class PrinterComponent {
  numeros:any[] = [];
  constructor(private valService : NumerinhosService){}
  getNumeros(){
    const fonte = this.valService.getNumeros();
    const inscricao = fonte.subscribe(
      numero => {
        this.numeros.push(numero);
      }
    );
  }
}
