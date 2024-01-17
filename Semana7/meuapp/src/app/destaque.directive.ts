import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit{

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  ngOnInit(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'red');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'purple');
    this.renderizador.setStyle(this.elemento.nativeElement, 'weight', 'bold');
  }

}
