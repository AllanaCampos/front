import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permissao:string = "";
  acesso:Array<string> = ["root", "admin", "visitante"];

  public onLogando():void{
    var conteudo = document.querySelector("input")?.value;
    var botao = document.querySelector("button");
    for(var i = 0; i < 3; i++){
      if(this.acesso[i] == conteudo){
        this.permissao = this.acesso[i];
        botao!.disabled = false;
      }
    }
  }

  public onClick(): void{
    var botao = document.querySelector("button");
    var paragrafo = document.querySelector("p");
    paragrafo!.textContent = "Bem vindo " + this.permissao + "!";
    this.permissao = "";
    botao!.disabled = true;
  }
}
