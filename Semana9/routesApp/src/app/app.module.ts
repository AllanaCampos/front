import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
const rotasApp: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'sobre', component: SobreComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rotasApp),
    MatButtonModule, MatDividerModule, MatIconModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
