import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('teste') titulo!: ElementRef<any>;
  title = 'meuapp';
  tarefas_appComponents = ['*-->Comprar pão'];
  numeroDeTarefas = this.tarefas_appComponents.length;
  onTarefaAdicionada(todo:string){
    this.tarefas_appComponents.push(todo);
    console.log("metodo chamado no pai")
    this.numeroDeTarefas++;
    this.titulo.nativeElement.innerText = "Numero de tarefas (" + this.numeroDeTarefas + ")";
  }
  
  @HostListener('window:click')
  onclick(){
    console.log('click');
  }

  @HostListener('window:resize')
  onResize(){
    console.log('resize');
  }

  
  
}
