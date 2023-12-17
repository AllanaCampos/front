import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  url:string = 'https://api.sunrise-sunset.org/json?lat=-14.7969145&lng=-39.173136';
  ngOnInit():void{
    fetch(this.url)
      .then(function (response) { return response.json(); })
      .then(function (data) { return servico(data); })
      .catch(function (error) { return console.error('Error:', error); });
  }
}

function servico(data: { results: { sunrise: string; sunset: string; day_length: string; }; }) {
  var lista = document.getElementById("lista");
  var titulo = document.createElement("h4");
  var sr = document.createElement("li");
  sr.textContent = "Nascer do sol: " + data.results.sunrise;
  var ss = document.createElement("li");
  ss.textContent = "Pôr do sol: " + data.results.sunset;
  var dl = document.createElement("li");
  dl.textContent = "Duração do dia: " + data.results.day_length;
  lista?.appendChild(titulo);
  lista?.appendChild(sr);
  lista?.appendChild(ss);
  lista?.appendChild(dl);
}