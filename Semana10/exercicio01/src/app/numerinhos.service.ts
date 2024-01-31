import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumerinhosService {

  constructor() { }
  getNumeros():Observable<any>{
    const source = from(Array.from(Array(100).keys()).map(x => x + 1));
    return source;
  }
  
}
