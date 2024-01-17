import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  paises:any[] = [];
  constructor() { }
  teste = new Promise(() => {
    setTimeout(() => {
      this.getNomePaises();
    }, 2000)});

  getNomePaises(){
    fetch('https://restcountries.com/v3.1/all')
    .then (resposta => resposta.json())
    //.then(paises => paises.map( (pais:any) => pais.name.common))
    .then (paises => paises.forEach((elemento:any) => {
      this.paises.push([elemento.name.common, elemento.population]);
    }))
    .catch(error => console.error('Erro com a chamada fetch: ', error));
  }

}
