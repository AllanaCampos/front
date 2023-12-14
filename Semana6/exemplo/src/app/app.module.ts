import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AraraComponent } from './arara/arara.component';
import { MacacoComponent } from './macaco/macaco.component';
import { DoguinhoComponent } from './doguinho/doguinho.component';

@NgModule({
  declarations: [
    AppComponent,
    AraraComponent,
    MacacoComponent,
    DoguinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
