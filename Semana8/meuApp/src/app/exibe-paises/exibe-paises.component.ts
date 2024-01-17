import { Component } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-exibe-paises',
  templateUrl: './exibe-paises.component.html',
  styleUrl: './exibe-paises.component.css'
})
export class ExibePaisesComponent {
  paises:any;
  constructor(private paisesService: PaisesService){ }

  ngOnInit(){
    this.paises = this.paisesService.paises;
  }
}
