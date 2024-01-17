import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestaqueComEvento]'
})
export class DestaqueComEventoDirective implements OnInit {

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('mouseenter') onMouseEnter(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'red');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }
  @HostListener('mouseleave') onMouseLeave(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'transparent');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'black');
  }
}
