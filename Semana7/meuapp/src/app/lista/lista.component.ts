import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent{
  @Input() frase: string = "";
  @Input() listaTarefas_listaTarefasComponent: string[] = [];
  @Output('tarefaFoiCriada') tarefaAdicionada = new EventEmitter<string>();

  addTarefa(todo:string){
    todo = "*-->" + todo;
    this.tarefaAdicionada.emit(todo);
  }
}
