import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})

export class ResultadosComponent {
  url:string = "https://api.math.tools/numbers/nod";
  ngOnInit():void{
    fetch(this.url)
      .then(function (response) { return response.json(); })
      .then( (data) => { return this.resultado(data); })
      .catch(function (error) { return console.error('Error:', error); });
  }
  resultado(data: { contents: { nod: { numbers: { number: string; numerals: { chinese: { description: string; display: string; }; }; recreational: { digitssum: { display: string; }; noofdigits: { display: string; }; reverse: { display: string; }; }; }; }; }; }) {
    var res = document.getElementById("resultados");
    var titulo = document.createElement("h4");
    titulo.textContent = "Número do dia: " + data.contents.nod.numbers.number;
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = data.contents.nod.numbers.numerals.chinese.description + " : " + data.contents.nod.numbers.numerals.chinese.display;
    paragrafo.innerHTML += "<br>Soma dos dígitos: " + data.contents.nod.numbers.recreational.digitssum.display;
    paragrafo.innerHTML += "<br>Número de dígitos: " + data.contents.nod.numbers.recreational.noofdigits.display;
    paragrafo.innerHTML += "<br>Invertido: " + data.contents.nod.numbers.recreational.reverse.display;
    res?.appendChild(titulo);
    res?.appendChild(paragrafo);
  }
}
