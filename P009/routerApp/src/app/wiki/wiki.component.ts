import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.css'
})
export class WikiComponent {
  constructor(public apiService: ApiService){}
  resultado:any;
  pesquisa="";
  getBusca(busca:string){
    this.pesquisa = busca.replace(' ', "%20");
    this.apiService.getData(this.pesquisa).subscribe(res=>{
    this.resultado = (<JSON>res);
    this.resultado = this.resultado["query"]["search"];
    console.log(this.resultado);
    });
  }  
}
