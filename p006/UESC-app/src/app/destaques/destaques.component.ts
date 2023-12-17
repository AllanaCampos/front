import { Component } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {
  url:string = "https://api.artic.edu/api/v1/artworks";
  ngOnInit():void{
    fetch(this.url)
      .then(function (response) {return response.json(); })
      .then(function (data) { return destaque(data); })
      .catch(function (error) { return console.error('Error:', error); });
  }
}

function destaque(data: { data: { image_id: any; artist_title: string | null; }[]; }) {
    makeImg(data.data[1]);
    makeImg(data.data[10]);
    makeImg(data.data[3]);
}

function makeImg(data: { image_id: any; artist_title: string | null; }){
    let div = document.querySelector(".slider-container");
    let item = document.createElement("figure");
    let id = data.image_id;
    let img = document.createElement("img");
    img.crossOrigin = "Anonymous";
    img.src = "https://www.artic.edu/iiif/2/" + id + "/full/843,/0/default.jpg";
    item.appendChild(img);
    let caption = document.createElement("figcaption");
    caption.textContent = data.artist_title;
    item.appendChild(caption);
    div?.appendChild(item);
}
