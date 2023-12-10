var url = "https://api.artic.edu/api/v1/artworks";
var api_key = "https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg";
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return destaque(data); })
    .catch(function (error) { return console.error('Error:', error); });
function destaque(data) {
    makeImg(data.data[1]);
    makeImg(data.data[10]);
    makeImg(data.data[3]);
}
function makeImg(data) {
    var div = document.querySelector(".slider-container");
    var item = document.createElement("figure");
    var id = data.image_id;
    var img = document.createElement("img");
    img.crossOrigin = "Anonymous";
    img.src = "https://www.artic.edu/iiif/2/" + id + "/full/843,/0/default.jpg";
    item.appendChild(img);
    var caption = document.createElement("figcaption");
    caption.textContent = data.artist_title;
    item.appendChild(caption);
    div === null || div === void 0 ? void 0 : div.appendChild(item);
}
fetch('https://api.sunrise-sunset.org/json?lat=-14.7969145&lng=-39.173136')
    .then(function (response) { return response.json(); })
    .then(function (data) { return servico(data); })
    .catch(function (error) { return console.error('Error:', error); });
function servico(data) {
    var lista = document.getElementById("lista");
    var titulo = document.createElement("h4");
    var sr = document.createElement("li");
    sr.textContent = "Nascer do sol: " + data.results.sunrise;
    var ss = document.createElement("li");
    ss.textContent = "Pôr do sol: " + data.results.sunset;
    var dl = document.createElement("li");
    dl.textContent = "Duração do dia: " + data.results.day_length;
    lista === null || lista === void 0 ? void 0 : lista.appendChild(titulo);
    lista === null || lista === void 0 ? void 0 : lista.appendChild(sr);
    lista === null || lista === void 0 ? void 0 : lista.appendChild(ss);
    lista === null || lista === void 0 ? void 0 : lista.appendChild(dl);
}
var url = "https://api.math.tools";
var key = "/numbers/nod";
fetch(url + key)
    .then(function (response) { return response.json(); })
    .then(function (data) { return resultado(data); })
    .catch(function (error) { return console.error('Error:', error); });
function resultado(data) {
    var res = document.getElementById("resultados");
    var titulo = document.createElement("h4");
    titulo.textContent = "Número do dia: " + data.contents.nod.numbers.number;
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = data.contents.nod.numbers.numerals.chinese.description + " : " + data.contents.nod.numbers.numerals.chinese.display;
    paragrafo.innerHTML += "<br>Soma dos dígitos: " + data.contents.nod.numbers.recreational.digitssum.display;
    paragrafo.innerHTML += "<br>Número de dígitos: " + data.contents.nod.numbers.recreational.noofdigits.display;
    paragrafo.innerHTML += "<br>Invertido: " + data.contents.nod.numbers.recreational.reverse.display;
    res === null || res === void 0 ? void 0 : res.appendChild(titulo);
    res === null || res === void 0 ? void 0 : res.appendChild(paragrafo);
}
fetch("https://services.isrostats.in/api/launches")
    .then(function (response) { return response.json(); })
    .then(function (data) { return noticias(data); })
    .catch(function (error) { return console.error('Error:', error); });
function noticias(data) {
    novaNoticia(data[0]);
    novaNoticia(data[1]);
    novaNoticia(data[2]);
}
function novaNoticia(data) {
    var not = document.getElementById("noticias");
    var titulo = document.createElement("h4");
    titulo.textContent = "Missão Espacial: " + data.Name;
    var paragrafo = document.createElement("p");
    var ancora = document.createElement("a");
    ancora.setAttribute("href", data.Link);
    ancora.innerHTML = "Data de lançamento: " + data.LaunchDate + "<br>Status: " + data.MissionStatus;
    paragrafo.appendChild(ancora);
    not === null || not === void 0 ? void 0 : not.appendChild(titulo);
    not === null || not === void 0 ? void 0 : not.appendChild(paragrafo);
}
