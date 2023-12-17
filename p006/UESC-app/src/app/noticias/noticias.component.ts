import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  url:string = "https://services.isrostats.in/api/launches"
  ngOnInit():void{
    fetch(this.url)
      .then(function (response) { return response.json(); })
      .then(function (data) { return noticias(data); })
      .catch(function (error) { return console.error('Error:', error); });
  }
}
function noticias(data: any[]): void {
  novaNoticia(data[0]);
  novaNoticia(data[1]);
  novaNoticia(data[2]);
}

function novaNoticia(data: { Name: string; Link: string; LaunchDate: string; MissionStatus: string; }) {
  var not = document.getElementById("noticias");
  var titulo = document.createElement("h4");
  titulo.textContent = "Missão Espacial: " + data.Name;
  var paragrafo = document.createElement("p");
  var ancora = document.createElement("a");
  ancora.setAttribute("href", data.Link);
  ancora.innerHTML = "Data de lançamento: " + data.LaunchDate + "<br>Status: " + data.MissionStatus;
  paragrafo.appendChild(ancora);
  not?.appendChild(titulo);
  not?.appendChild(paragrafo);
}