import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeituraService } from '../leitura.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  categorias:string[] = [];
  json: any;
  constructor(private leituraService : LeituraService){
    this.leituraService.json$.subscribe(json=>{
      this.json = json;
      this.getCategorias();
    });
  }
  getCategorias(){
    for(const key in this.json){
      this.categorias.push(key);
    }
  }
  selecionado(categoria:string){
    for(const key in this.json){
      if(key == categoria){
        this.leituraService.setCategoria(this.json[key]);
      }
    }
    this.leituraService.setPermissaoSalvar(true);
  }
}
