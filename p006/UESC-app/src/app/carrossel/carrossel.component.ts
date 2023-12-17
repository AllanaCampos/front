import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit, OnDestroy {
  url:string = "https://api.artic.edu/api/v1/artworks";
  timerSubs!: Subscription;
  figure: any[] = new Array();
  caption:string ="";
  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }
  
  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.figure.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
    fetch(this.url)
      .then(function (response) {return response.json(); })
      .then( (data) => { return this.destaque(data); })
      .catch(function (error) { return console.error('Error:', error); });
  }
  
  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(10000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }
  
  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.caption = this.figure[index].caption;
    this.iniciarTimer();
  }

  destaque(data: { data: { image_id: any; artist_title: string | null; }[]; }) {
    console.log(data);
    for(var i = 0; i < 12; i++){
      if(data.data[i].image_id != null)
        this.makeImg(data.data[i]);
    }
  }
  
  makeImg(data: { image_id: any; artist_title: string | null; }){
    let id = data.image_id;
    let src = "https://www.artic.edu/iiif/2/" + id + "/full/843,/0/default.jpg";
    this.figure.push({id: src, caption: data.artist_title});
  }
}

