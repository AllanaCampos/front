import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FormularioComponent {
  adcElemento() {
      var destino = (<HTMLInputElement>document.querySelector(".destino")).value;
      var url = (<HTMLInputElement>document.querySelector(".imagem")).value;
      var diarias = (<HTMLInputElement>document.querySelector("#diaria")).value;
      var cafe = <HTMLInputElement>document.querySelector("#cafe");
      var preco = (<HTMLInputElement>document.querySelector(".preco")).value;
      var divNova = document.createElement("div");
      divNova.setAttribute("class", "roteiros-viagens");
      var img = document.createElement("img");
      img.setAttribute("src", url);
      divNova.appendChild(img);
      var divDestino = document.createElement("div");
      divDestino.setAttribute("class", "roteiro-destino");
      var text = document.createTextNode(destino);
      divDestino.appendChild(text);
      divNova.appendChild(divDestino);
      var lista = document.createElement("ul");
      lista.setAttribute("class", "roteiro-incluso");
      var ida = <HTMLInputElement>document.querySelector("#ida");
      var volta = <HTMLInputElement>document.querySelector("#volta");
      var idaVolta = "";
      if(ida.checked){
          if(volta.checked){
              idaVolta = "Aéreo ida e volta";
          }
          else idaVolta = "Aéreo ida";
      }
      else if(volta.checked){
              idaVolta = "Aéreo volta";
          }
      var textIV = document.createTextNode(idaVolta);
      var p1 = document.createElement("li");
      p1.appendChild(textIV);
      var textD = document.createTextNode(diarias + " diárias");
      var p2 = document.createElement("li");
      p2.appendChild(textD);
      var coffe = ""
      if(cafe.checked){
          coffe = "Café da Manhâ";
      }
      var textC = document.createTextNode(coffe);
      var p3 = document.createElement("li");
      p3.appendChild(textC);
      lista.appendChild(p1);
      lista.appendChild(p2);
      lista.appendChild(p3);
      divNova.appendChild(lista);
      var divPreco = document.createElement("div");
      divPreco.setAttribute("class", "roteiro-preco");
      var textP = document.createTextNode("R$ " + preco + ",00");
      divPreco.append(textP);
      divNova.appendChild(divPreco);
      var divObs = document.createElement("div");
      divObs.setAttribute("class", "roteiro-obs");
      var obs = document.createTextNode("Taxas Inclusas");
      divObs.appendChild(obs);
      divNova.appendChild(divObs);
      var divParecelamento = document.createElement("div");
      divParecelamento.setAttribute("class", "roteiro-parcelamento");
      var parcelamento = document.createTextNode("Em até 10x sem Juros");
      divParecelamento.appendChild(parcelamento);
      divNova.appendChild(divParecelamento);
      var b = document.createElement("button");
      b.setAttribute("class", "roteiro-comprar");
      var textB = document.createTextNode("Comprar");
      b.appendChild(textB);
      divNova.appendChild(b);
      document.querySelector(".container-destinos")!.appendChild(divNova);
  }
}
