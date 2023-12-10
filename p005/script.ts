var url = "https://api.artic.edu/api/v1/artworks";
var api_key = "https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg";

fetch(url)
    .then(function (response) {return response.json(); })
    .then(function (data) { return destaque(data); })
    .catch(function (error) { return console.error('Error:', error); });

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

fetch('https://api.sunrise-sunset.org/json?lat=-14.7969145&lng=-39.173136')
    .then(function (response) { return response.json(); })
    .then(function (data) { return servico(data); })
    .catch(function (error) { return console.error('Error:', error); });

    function servico(data: { results: { sunrise: string; sunset: string; day_length: string; }; }) {
    var lista = document.getElementById("lista");
    var titulo = document.createElement("h4");
    var sr = document.createElement("li");
    sr.textContent = "Nascer do sol: " + data.results.sunrise;
    var ss = document.createElement("li");
    ss.textContent = "Pôr do sol: " + data.results.sunset;
    var dl = document.createElement("li");
    dl.textContent = "Duração do dia: " + data.results.day_length;
    lista?.appendChild(titulo);
    lista?.appendChild(sr);
    lista?.appendChild(ss);
    lista?.appendChild(dl);
}
var url = "https://api.math.tools";
var key = "/numbers/nod";
fetch(url + key)
    .then(function (response) { return response.json(); })
    .then(function (data) { return resultado(data); })
    .catch(function (error) { return console.error('Error:', error); });

function resultado(data: { contents: { nod: { numbers: { number: string; numerals: { chinese: { description: string; display: string; }; }; recreational: { digitssum: { display: string; }; noofdigits: { display: string; }; reverse: { display: string; }; }; }; }; }; }) {
    var res = document.getElementById("resultados");
    var titulo = document.createElement("h4");
    titulo.textContent = "Número do dia: " + data.contents.nod.numbers.number;
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = data.contents.nod.numbers.numerals.chinese.description + " : " + data.contents.nod.numbers.numerals.chinese.display;
    paragrafo.innerHTML += "<br>Soma dos dígitos: " + data.contents.nod.numbers.recreational.digitssum.display;
    paragrafo.innerHTML += "<br>Número de dígitos: " + data.contents.nod.numbers.recreational.noofdigits.display;
    paragrafo.innerHTML += "<br>Invertido: " + data.contents.nod.numbers.recreational.reverse.display;
    res?.appendChild(titulo);
    res?.appendChild(paragrafo);
}
fetch("https://services.isrostats.in/api/launches")
    .then(function (response) { return response.json(); })
    .then(function (data) { return noticias(data); })
    .catch(function (error) { return console.error('Error:', error); });
function noticias(data: any[]) {
    novaNoticia(data[0]);
    novaNoticia(data[1]);
    novaNoticia(data[2]);
}
function novaNoticia(data: { Name: string; Link: string; LaunchDate: string; MissionStatus: string; }) {
    var not = document.getElementById("noticias");
    var titulo = document.createElement("h4");
    titulo.textContent = "Missão Espacial: " + data.Name;
    var paragrafo = document.createElement("p");
    var ancora = document.createElement("a");
    ancora.setAttribute("href", data.Link);
    ancora.innerHTML = "Data de lançamento: " + data.LaunchDate + "<br>Status: " + data.MissionStatus;
    paragrafo.appendChild(ancora);
    not?.appendChild(titulo);
    not?.appendChild(paragrafo);
}
