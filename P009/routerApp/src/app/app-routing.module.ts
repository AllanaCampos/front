import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';
import { JReaderComponent } from './jreader/jreader.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { FormularioComponent } from './formulario/formulario.component';

const rotasApp: Routes = [
  { path: 'wiki', component: WikiComponent},
  { path: 'jReader', component: JReaderComponent},
  { path: 'roteiros', component: RoteirosComponent},
  { path: 'formulario', component: FormularioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(rotasApp)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
