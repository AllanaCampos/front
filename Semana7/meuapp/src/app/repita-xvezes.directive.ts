import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepitaXvezes]'
})
export class RepitaXvezesDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appRepitaXvezes(vezes:number){
    for(var i = 0; i<vezes; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
