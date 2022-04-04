// Div para o map //
const div = document.createElement('div');
div.id = 'map';
div.setAttribute('style', 'diplay: block; margin: auto; padding: auto; width: 800px; height: 500px');
document.querySelector('body').appendChild(div);

// Buscar dados da API mapbox //
const requestURL = 'https://api.mapbox.com/v4/ro3son/access_token=pk.eyJ1Ijoicm8zc29uIiwiYSI6ImNsMWwzOWptejA2dTkzZGw2NWtmank2cTUifQ.f8VWFAPCv-_BzmPDJ6_-Tg';

fetch(requestURL)
.then((response) => {
    return response.json();
})
.then((dados) => {
    let maps = dados;
    console.log(maps);
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm8zc29uIiwiYSI6ImNsMWwzOWptejA2dTkzZGw2NWtmank2cTUifQ.f8VWFAPCv-_BzmPDJ6_-Tg';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-66.757, 30.524], // starting position [lng, lat]
        zoom: 6 // starting zoom
        });
})
