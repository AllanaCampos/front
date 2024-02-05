import { Component} from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  propriedades:any;
  constructor(private leituraService : LeituraService){
    this.leituraService.objeto$.subscribe(objeto =>{
      this.getPropriedades(objeto);
    })
  }
  selecionado(propriedade:any){
    this.leituraService.setPropriedades(propriedade);
  }
  getPropriedades(veiculo:any){
    this.propriedades = Object.keys(veiculo);
  }
}
