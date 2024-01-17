import { Component } from '@angular/core';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meuApp';
  paises:any;
  constructor(private paisesService: PaisesService){ }

  ngOnInit(){
    this.paises = this.paisesService.paises;
  }
}
