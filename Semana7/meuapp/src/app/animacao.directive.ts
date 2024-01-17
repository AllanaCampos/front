import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimacao]'
})
export class AnimacaoDirective {

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  @HostListener('click') onClick(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'rgb(71, 109, 14)');
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '5px 10px rgb(88, 87, 88)');
    this.renderizador.setStyle(this.elemento.nativeElement, 'border-radius', '10px');
  }
  @HostListener('dblClick') onDblClick(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'red');
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '5px 10px rgb(88, 87, 88)');
    this.renderizador.setStyle(this.elemento.nativeElement, 'border-radius', '10px');
  }
}
